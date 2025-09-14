<?php

use App\Events\SendMessage;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/send', function () {
    SendMessage::dispatch(request()->msg);
    return 'Message sent!';
});
