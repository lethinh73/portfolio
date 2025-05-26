@props(['href'])

<a href="{{ $href }}" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">
    {{ $slot }}
</a>