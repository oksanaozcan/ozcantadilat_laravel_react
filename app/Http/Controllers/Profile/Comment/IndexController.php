<?php

namespace App\Http\Controllers\Profile\Comment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Profile\Comment\CommentResource;

class IndexController extends Controller
{
  public function __invoke()
  {
    $comments = auth()->user()->comments;
    return CommentResource::collection($comments);
  }
}
