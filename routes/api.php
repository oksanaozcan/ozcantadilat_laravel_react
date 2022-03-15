<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    // return User::getRoles();
});

Route::prefix('categories')->group(function () {
  Route::get('/', App\Http\Controllers\Admin\Category\IndexController::class);  
  Route::get('/{category}', App\Http\Controllers\Admin\Category\ShowController::class);  
  Route::post('/store', App\Http\Controllers\Admin\Category\StoreController::class);
  Route::patch('/{category}', App\Http\Controllers\Admin\Category\UpdateController::class);
  Route::delete('/{category}', App\Http\Controllers\Admin\Category\DeleteController::class);
});

Route::prefix('tags')->group(function () {
  Route::get('/', App\Http\Controllers\Admin\Tag\IndexController::class);  
  Route::get('/{tag}', App\Http\Controllers\Admin\Tag\ShowController::class);  
  Route::post('/store', App\Http\Controllers\Admin\Tag\StoreController::class);
  Route::patch('/{tag}', App\Http\Controllers\Admin\Tag\UpdateController::class);
  Route::delete('/{tag}', App\Http\Controllers\Admin\Tag\DeleteController::class);
});



















// Route::get('/{category}', function ($category) {
  //   return new CategoryResource(Category::findOrFail($category));
  // });