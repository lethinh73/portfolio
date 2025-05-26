@props(['imgSrc', 'imgAlt'])

<div class="bg-gray-800 rounded-lg shadow-xl border-4 border-cyan-400 card-hover-effect">
    <img src="{{ $imgSrc }}" alt="{{ $imgAlt }}" class="w-full" loading="lazy" />
</div>