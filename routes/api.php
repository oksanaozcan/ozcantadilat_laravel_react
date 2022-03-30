<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    // return User::getRoles();
});

Route::prefix('admin')->group(function () {
  Route::get('/', App\Http\Controllers\Admin\MainController::class);

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
  
  Route::prefix('posts')->group(function () {
    Route::get('/', App\Http\Controllers\Admin\Post\IndexController::class);  
    Route::get('/{post}', App\Http\Controllers\Admin\Post\ShowController::class);  
    Route::post('/store', App\Http\Controllers\Admin\Post\StoreController::class);
    Route::patch('/{post}', App\Http\Controllers\Admin\Post\UpdateController::class);
    Route::delete('/{post}', App\Http\Controllers\Admin\Post\DeleteController::class);
  });
  
  Route::prefix('users')->group(function () {
    Route::get('/', App\Http\Controllers\Admin\User\IndexController::class);  
    Route::get('/roles', function () {
      return User::getRoles();
    });  
    Route::get('/{user}', App\Http\Controllers\Admin\User\ShowController::class);  
    Route::post('/store', App\Http\Controllers\Admin\User\StoreController::class);
    Route::patch('/{user}', App\Http\Controllers\Admin\User\UpdateController::class);
    Route::delete('/{user}', App\Http\Controllers\Admin\User\DeleteController::class);
  });
});

Route::prefix('profile')->group(function () {
  Route::get('/', App\Http\Controllers\Profile\IndexController::class);
  Route::get('/likedposts', App\Http\Controllers\Profile\Liked\IndexController::class);
  Route::get('/comments', App\Http\Controllers\Profile\Comment\IndexController::class);
});

Route::prefix('posts')->group(function () {
  Route::get('/', App\Http\Controllers\Posts\IndexController::class);  
  Route::prefix('{post}')->group(function () {
    Route::get('/', App\Http\Controllers\Posts\ShowController::class);
    Route::post('/like', App\Http\Controllers\Posts\Like\StoreController::class);
  });    
});