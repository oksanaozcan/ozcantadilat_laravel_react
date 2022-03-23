@component('mail::message')
Hello New User!

Your Password: {{ $password }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
