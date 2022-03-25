<?php

namespace App\Http\Controllers\Profile\Liked;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
  public function __invoke(Post $post)
  {
    auth()->user()->likedPosts()->detach($post->id);    
  }
}
