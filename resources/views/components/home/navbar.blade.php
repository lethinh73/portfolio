<header class="absolute inset-x-0 top-0 z-50" x-data="{ mobileMenuOpen: false }">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Thinh Le</span>
                <img class="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" />
            </a>
        </div>
        <div class="flex lg:hidden">
            <button type="button" @click="mobileMenuOpen = true"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 dark:text-gray-400 cursor-pointer">
                <span class="sr-only">Open main menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a href="#skills" class="text-sm/6 font-semibold text-black dark:text-white">Skills</a>
            <a href="#experience" class="text-sm/6 font-semibold text-black dark:text-white">Experience</a>
            <a href="#projects" class="text-sm/6 font-semibold text-black dark:text-white">Projects</a>
            <a href="#contact" class="text-sm/6 font-semibold text-black dark:text-white">Contact</a>
        </div>

        <div class="hidden lg:flex lg:flex-1 gap-2 items-center lg:justify-end">
            <flux:button x-data x-on:click="$flux.dark = ! $flux.dark" icon="moon" variant="subtle" aria-label="Toggle dark mode" />

            <flux:separator vertical />

            @if (Route::has('login'))
                @auth
                    <a href="{{ route('dashboard') }}" class="text-sm/6 font-semibold text-black dark:text-white">
                        Dashboard <span aria-hidden="true">&rarr;</span>
                    </a>
                @else
                    <a href="{{ route('login') }}" class="text-sm/6 font-semibold text-black dark:text-white">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                @endauth
            @endif
        </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true" x-show="mobileMenuOpen">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div @click="mobileMenuOpen = false" class="fixed inset-0 z-50"></div>
        <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-200 dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Thinh Le</span>
                    <img class="h-8 w-auto"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" />
                </a>
                
                <button @click="mobileMenuOpen = false" type="button"
                    class="-m-2.5 rounded-md p-2.5 text-gray-800 dark:text-gray-400 cursor-pointer">
                    <span class="sr-only">Close menu</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/25">
                    <div class="space-y-2 py-6">
                        <a href="#skills"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-800">Skills</a>
                        <a href="#experience"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-800">Experience</a>
                        <a href="#projects"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-800">Projects</a>
                        <a href="#contact"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-800">Contact</a>
                    </div>

                    @if (Route::has('login'))
                        <div class="py-6">
                            @auth
                                <a href="{{ route('dashboard') }}"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-800">
                                    Dashboard
                                </a>
                            @else
                                <a href="{{ route('login') }}"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-800">
                                    Log in
                                </a>
                            @endauth
                        </div>
                    @endif

                    <div class="py-6">
                        <flux:radio.group x-data variant="segmented" x-model="$flux.appearance">
                            <flux:radio value="light" icon="sun" />
                            <flux:radio value="dark" icon="moon" />
                            <flux:radio value="system" icon="computer-desktop" />
                        </flux:radio.group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>