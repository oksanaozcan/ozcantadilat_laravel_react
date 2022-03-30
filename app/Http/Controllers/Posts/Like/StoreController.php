<?php

namespace App\Http\Controllers\Posts\Like;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\SinglePostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Post $post)
    {
      auth()->user()->likedPosts()->toggle($post->id);
    }
}
