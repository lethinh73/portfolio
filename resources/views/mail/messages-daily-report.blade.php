<x-mail::message>
# Daily Message Report

Hello,

Here is a list of messages received yesterday ({{ \Carbon\Carbon::yesterday()->format('m/d/Y') }}).
There are total {{ count($messages) }} messages.

@if (count($messages) > 0)
    Last 5 messages:
    <x-mail::table>
        | Sender           | Email                   | Message (preview)         |
        |:-----------------|:------------------------|:--------------------------|
        @foreach ($messages->splice(0, 5) as $message)
        | {{ $message->name }} | {{ $message->email }} | {{ $message->message }} |
        @endforeach
    </x-mail::table>    
@endif

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>