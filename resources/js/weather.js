document.addEventListener('DOMContentLoaded', function() {
    const weatherWidget = document.getElementById('weather-widget');
    const weatherIconCurrent = document.getElementById('weather-icon-current');
    const weatherTempCurrent = document.getElementById('weather-temp-current');
    const weatherDescriptionCurrent = document.getElementById('weather-description-current');
    const weatherMoreInfo = document.getElementById('weather-more-info');
    const weatherForecastContainer = document.getElementById('weather-forecast-container');

    function getWeatherIconUrl(iconCode) {
        return `/images/weather/${iconCode}.png`;
    }

    // Function to update weather widget HTML
    function updateWeatherUI(data) {
        if (!weatherWidget) return;

        console.log("Updating weather widget with data:", data);

        // Update Current Weather
        const currentData = data.current;
        const forecastToday = data.forecasts[0];
        const currentWeather = data.current.weather[0];
        weatherIconCurrent.classList.remove('animate-spin');
        weatherIconCurrent.src = getWeatherIconUrl(currentWeather.icon);
        weatherIconCurrent.alt = `${currentWeather.main} icon`;
        weatherIconCurrent.classList.add('w-16', 'h-16');

        weatherTempCurrent.textContent = `${currentData.temp}°F`;
        weatherDescriptionCurrent.textContent = currentWeather.main;
        weatherMoreInfo.innerHTML = `
        <div class="text-start w-fit">
            <div><i class="fa-solid fa-temperature-high"></i> Feels like: ${currentData.feels_like}°F</div>
            <div><i class="fa-solid fa-water"></i> Humidity: ${currentData.humidity}%</div>
            <div><i class="fa-solid fa-temperature-arrow-up"></i> High: ${forecastToday.temp.max}°F</div>
            <div><i class="fa-solid fa-temperature-arrow-down"></i> Low: ${forecastToday.temp.min}°F</div>
        </div>
        `;

        // Clear previous forecast
        weatherForecastContainer.innerHTML = '';

        // Render 3-Day Forecast
        data.forecasts.forEach((forecastData, index) => {
            if (index === 0) return; // Skip today, as it's handled by current weather display

            const date = new Date(forecastData.dt * 1000); // Convert Unix timestamp to Date object
            const dayOfWeek = index === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short' });
            const forecastWeather = forecastData.weather[0];

            // Create forecast item
            const forecastItem = document.createElement('div');
            forecastItem.className = 'flex flex-col items-center p-2 rounded-lg bg-gray-500 border border-gray-900 flex-grow';
            forecastItem.innerHTML = `
                <p class="text-sm font-semibold text-gray-200 mb-1">${dayOfWeek}</p>
                <img src="${getWeatherIconUrl(forecastWeather.icon)}" alt="${forecastWeather.main} icon" class="w-12 h-12 mx-auto mb-1">
                <p class="text-sm text-gray-300">${forecastWeather.main}</p>
                <div class="text-start w-fit">
                    <p class="text-xs text-gray-400"><i class="fa-solid fa-temperature-arrow-up"></i>: ${forecastData.temp.max}°F</p>
                    <p class="text-xs text-gray-400"><i class="fa-solid fa-temperature-arrow-down"></i>: ${forecastData.temp.min}°F</p>
                    <p class="text-xs text-gray-400"><i class="fa-solid fa-water"></i>: ${forecastData.humidity}%</p>
                </div>
            `;
            weatherForecastContainer.appendChild(forecastItem);
        });

        weatherWidget.classList.remove('hidden'); // Show widget once data is loaded
    }

    // Function to fetch weather data using Axios
    async function fetchWeather() {
        try {
            const response = await axios.get('/api/weather');
            updateWeatherUI(response.data);
        } catch (error) {
            console.error("Failed to fetch weather:", error);
            let errorMessage = "Failed to load weather data.";
            if (error.response && error.response.data && error.response.data.error) {
                errorMessage = error.response.data.error;
            } else if (error.message) {
                errorMessage = error.message;
            }

            if (weatherWidget) {
                // Clear existing content and display a user-friendly error
                weatherWidget.innerHTML = `
                    <div class="flex flex-col items-center justify-center p-8">
                        <p class="text-red-400 text-lg font-semibold text-center mb-2">Oops!</p>
                        <p class="text-red-300 text-md text-center">${errorMessage}</p>
                        <p class="text-gray-400 text-sm mt-4">Please try again later or refresh the page.</p>
                    </div>
                `;
                weatherWidget.classList.remove('hidden');
            }
        }
    }

    // Fetch weather data when the DOM is ready
    fetchWeather();
});