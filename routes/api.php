<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Category\IndexController;
use App\Http\Controllers\Admin\Category\ShowController;
use App\Http\Controllers\Admin\Category\StoreController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    // return User::getRoles();
});

// Route::prefix('persones')->group(function () {
//   Route::get('/', 'App\Http\Controllers\Persone\IndexController')->name('persone.index');
//   Route::post('/store', [StoreController::class, 'store']);
//   Route::patch('/{persone}', [UpdateController::class, 'update']);
//   Route::delete('/{persone}', [DeleteController::class, 'delete']);
//   Route::get('/{persone}', [ShowController::class, 'show']);
// });

Route::prefix('categories')->group(function () {
  Route::get('/', IndexController::class);
  Route::get('/{category}', ShowController::class);
  Route::post('/store', StoreController::class);
});