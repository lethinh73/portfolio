<div id="weather-widget"
     {{ $attributes->merge(['class' => 'p-4 rounded-lg bg-gray-800/70 border border-gray-700 shadow-xl backdrop-blur-sm hidden']) }}>
    <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-4 w-full">
        <div class="text-center flex-shrink-0 mb-4 md:mb-0 w-full md:w-auto">
            <h4 class="text-lg font-bold text-gray-200 mb-2">Current in Houston</h4>
            <div class="flex items-center justify-center space-x-2">
                <img id="weather-icon-current" src="/images/weather/loading.svg" alt="Loading weather icon" class="w-16 h-16 animate-spin">
                <p id="weather-temp-current" class="text-4xl font-extrabold text-cyan-300">Loading...</p>
            </div>
            <p id="weather-description-current" class="text-lg font-medium text-gray-200 mt-1">Fetching weather...</p>
            <div id="weather-more-info" class="text-sm text-gray-400 mt-1 flex justify-center space-x-2">Loading...</div>
        </div>

        <div class="w-full h-px bg-gray-700 my-4 md:hidden"></div>

        <div class="flex-grow w-full md:w-auto">
            <h4 class="text-lg font-bold text-gray-200 text-center mb-2">Upcoming 3 Days</h4>
            <div id="weather-forecast-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                @for ($i = 0; $i < 3; $i++)
                    <div class="text-center p-2 rounded-lg bg-gray-700 border border-gray-600 flex flex-col items-center justify-center min-h-[120px]">
                        <p class="text-sm font-semibold text-gray-200 mb-1">...</p>
                        <img src="/images/weather/loading.svg" alt="Loading forecast icon" class="w-10 h-10 animate-spin mb-1">
                        <p class="text-sm text-gray-300">...</p>
                        <p class="text-xs text-gray-400">...</p>
                    </div>
                @endfor
            </div>
        </div>
    </div>
</div>