@props(['title', 'subtitle' => null, 'location' => null, 'dates' => null, 'iconClass', 'borderColor'])

<details class="bg-gray-800 rounded-lg shadow-md border-l-4 {{ $borderColor }} card-hover-effect">
    <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
        <div class="flex items-center">
            <i class="{{ $iconClass }} text-xl text-cyan-400 mr-3"></i>
            <div class="flex flex-col items-start">
                <h3 class="text-xl font-bold">
                    {{ $title }}
                </h3>
                @if ($subtitle)
                    <p class="text-lg text-blue-500">{{ $subtitle }}</p>
                @endif
            </div>
        </div>
        <div class="flex items-center">
            @if ($dates || $location)
                <p class="text-gray-400 text-sm ml-4 hidden md:block">
                    @if ($dates) {{ $dates }} @endif
                    @if ($dates && $location) | @endif
                    @if ($location) {{ $location }} @endif
                </p>
            @endif

            <i class="fa-solid fa-chevron-right accordion-icon ml-2"></i>
        </div>
    </summary>
    <div class="px-5 pb-5">
        <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {{ $slot }}
        </ul>
    </div>
</details>