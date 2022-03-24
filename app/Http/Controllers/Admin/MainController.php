<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\User;

class MainController extends Controller
{
  public function __invoke()
  {
    $posts = Post::all()->count();
    $users = User::all()->count();

    return [
      'posts' => $posts,
      'users' => $users
    ]; 
  }
}
