@props(['imgSrc', 'imgAlt'])

<div class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 card-hover-effect group">
  <img src="{{ $imgSrc }}" alt="{{ $imgAlt }}" class="w-full h-48 object-cover" loading="lazy" />
  <div class="p-5">
    {{ $slot }}
  </div>
</div>