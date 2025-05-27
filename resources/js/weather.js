document.addEventListener('DOMContentLoaded', function() {
    const weatherWidget = document.getElementById('weather-widget');
    const weatherIconCurrent = document.getElementById('weather-icon-current');
    const weatherTempCurrent = document.getElementById('weather-temp-current');
    const weatherDescriptionCurrent = document.getElementById('weather-description-current');
    const weatherFeelsLike = document.getElementById('weather-feels-like');
    const weatherForecastContainer = document.getElementById('weather-forecast-container');

    // Make sure you have actual weather icon images in this path, e.g., 01d.png, 02n.png, etc.
    // And a loading.svg or loading.png for the spinner placeholder.
    function getWeatherIconUrl(iconCode) {
        return `/images/weather/${iconCode}.png`;
    }

    // Function to update weather widget HTML
    function updateWeatherUI(data) {
        if (!weatherWidget) return;

        // Update Current Weather
        weatherIconCurrent.classList.remove('animate-spin'); // Stop current icon spinner
        weatherIconCurrent.src = getWeatherIconUrl(data.current_icon);
        weatherIconCurrent.alt = `${data.current_description} icon`;
        weatherIconCurrent.classList.add('w-16', 'h-16'); // Ensure correct size after loading, remove if already set by default

        weatherTempCurrent.textContent = `${data.current_temp}°F`;
        weatherDescriptionCurrent.textContent = data.current_description;
        weatherFeelsLike.textContent = `Feels like: ${data.current_feels_like}°F`;

        // Clear previous forecast
        weatherForecastContainer.innerHTML = '';

        // Render 3-Day Forecast
        data.forecasts.forEach((dayData, index) => {
            if (index === 0) return; // Skip today, as it's handled by current weather display

            const date = new Date(dayData.dt * 1000); // Convert Unix timestamp to Date object
            const dayOfWeek = index === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short' });

            const forecastItem = document.createElement('div');
            forecastItem.className = 'text-center p-2 rounded-lg bg-gray-700 border border-gray-600 flex-grow'; // Added flex-grow
            forecastItem.innerHTML = `
                <p class="text-sm font-semibold text-gray-200 mb-1">${dayOfWeek}</p>
                <img src="${getWeatherIconUrl(dayData.icon)}" alt="${dayData.description} icon" class="w-12 h-12 mx-auto mb-1">
                <p class="text-sm text-gray-300">${dayData.description}</p>
                <p class="text-xs text-gray-400">H:${dayData.temp_max}°F / L:${dayData.temp_min}°F</p>
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