@props(['textColor', 'bgColor'])

<span class="px-2 py-1 text-xs font-semibold {{ $textColor }} {{ $bgColor }} rounded-full">
    {{ $slot }}
</span>