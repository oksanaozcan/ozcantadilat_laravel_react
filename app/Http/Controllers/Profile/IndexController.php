<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class IndexController extends Controller
{
  public function __invoke()
  {
    $likedPosts = auth()->user()->likedPosts->count();
    return [
      'likedPosts' => $likedPosts
    ];
  }
}
