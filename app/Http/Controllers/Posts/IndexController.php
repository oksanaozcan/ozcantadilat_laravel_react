<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class IndexController extends Controller
{
  public function __invoke(Request $request)
  {
    $posts = Post::paginate(3);   
    return PostResource::collection($posts);
  }
}
