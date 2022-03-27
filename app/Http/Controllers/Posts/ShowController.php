<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\SinglePostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class ShowController extends Controller
{
  public function __invoke(Post $post)
  {
    return new SinglePostResource($post); 
  }
}
