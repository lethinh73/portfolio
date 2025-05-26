@props(['title'])

<div class="p-5 bg-gray-800 rounded-lg shadow-md border border-gray-700 card-hover-effect">
    <h3 class="mb-3 text-xl font-semibold text-teal-400"><i class="fas fa-code mr-2"></i>{{ $title }}</h3>
    {{ $slot }}
</div>