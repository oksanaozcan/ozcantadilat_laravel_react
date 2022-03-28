<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;

class IndexController extends Controller
{
  public function __invoke()
  {
    // $posts = Post::all();
    $posts = Post::paginate(3);   
    return PostResource::collection($posts);
  }
}
