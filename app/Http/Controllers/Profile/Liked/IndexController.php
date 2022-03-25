<?php

namespace App\Http\Controllers\Profile\Liked;

use App\Http\Controllers\Controller;
use App\Http\Resources\Profile\Liked\PostResource;

class IndexController extends Controller
{
  public function __invoke()
  {
    $likedPosts = auth()->user()->likedPosts;
    return PostResource::collection($likedPosts);
  }
}
