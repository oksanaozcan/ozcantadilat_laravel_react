<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class ShowController extends Controller
{
  public function __invoke(Post $post)
  {
    return new PostResource($post); 
  }
}
