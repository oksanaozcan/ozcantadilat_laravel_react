<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\RootController;

Auth::routes();

Route::get('{page}', RootController::class)->where('page', '.*');
