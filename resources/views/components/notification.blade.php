@props([
    'type' => 'success',
    'title' => '',
    'content' => '',
])

<div x-data="{
        notifications: [],
        counter: 0,
        add(notification) {
            notification.id = this.counter++;
            this.notifications.push(notification);
        },
        remove(id) {
            this.notifications = this.notifications.filter(n => n.id !== id);
        }
    }" @notify.window="add($event.detail)" x-init="
        @if (session('notification'))
            add({
                type: '{{ session('notification.type', 'success') }}',
                title: '{{ session('notification.title') }}',
                content: '{{ session('notification.content') }}'
            })
        @elseif ($errors->any())
            add({
                type: 'error',
                title: 'Validation Error',
                content: 'Please review the form and correct the issues highlighted below.'
            })
        @endif
    " class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
    aria-live="assertive">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <template x-for="notification in notifications" :key="notification.id">
            <div x-init="setTimeout(() => remove(notification.id), 5000)"
                x-transition:enter="transform ease-out duration-300 transition"
                x-transition:enter-start="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                x-transition:enter-end="translate-y-0 opacity-100 sm:translate-x-0"
                x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                <div class="p-4">
                    <div class="flex items-start">
                        <div class="shrink-0">
                            <template x-if="notification.type === 'success'">
                                <svg class="size-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </template>
                            <template x-if="notification.type === 'error'">
                                <svg class="size-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </template>
                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900" x-text="notification.title"></p>
                            <p class="mt-1 text-sm text-gray-500" x-text="notification.content"></p>
                        </div>
                        <div class="ml-4 flex shrink-0">
                            <button @click="remove(notification.id)" type="button"
                                class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                                <span class="sr-only">Close</span>
                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</div>