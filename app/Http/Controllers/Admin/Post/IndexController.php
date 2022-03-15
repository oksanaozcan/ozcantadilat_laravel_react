<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\Post\PostResource;
use App\Models\Post;

class IndexController extends Controller
{
  public function __invoke()
  {
    $posts = Post::all();
    return PostResource::collection($posts);
  }
}
