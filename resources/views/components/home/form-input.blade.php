@props(['id', 'name', 'type' => 'text', 'placeholder', 'label', 'ariaDescribedby', 'isTextArea' => false])

<div class="mb-4">
    <label for="{{ $id }}" class="block mb-2 text-sm font-bold text-gray-300 text-left">{{ $label }}</label>
    @if ($isTextArea)
        <textarea id="{{ $id }}" name="{{ $name }}" rows="4" required aria-describedby="{{ $ariaDescribedby }}"
            class="w-full px-4 py-3 leading-tight text-gray-100 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
            placeholder="{{ $placeholder }}">{{ old($name) }}</textarea>
    @else
        <input type="{{ $type }}" id="{{ $id }}" name="{{ $name }}" required aria-describedby="{{ $ariaDescribedby }}"
            class="w-full px-4 py-3 leading-tight text-gray-100 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
            placeholder="{{ $placeholder }}" value="{{ old($name) }}" />
    @endif
    <p id="{{ $ariaDescribedby }}" class="sr-only">{{ $label }}</p> {{-- Keeping this for SR only --}}
</div>