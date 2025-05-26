@props(['href', 'iconClass', 'label'])

<a href="{{ $href }}" target="_blank"
   class="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-125"
   aria-label="{{ $label }}">
    <i class="{{ $iconClass }} fa-2x"></i>
</a>