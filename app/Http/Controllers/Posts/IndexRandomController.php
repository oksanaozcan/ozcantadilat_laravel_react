<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Http\Filters\PostFilter;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;

class IndexRandomController extends Controller
{
  public function __invoke()
  {
    $posts = Post::get()->random(3);         
    return PostResource::collection($posts);
  }
}
