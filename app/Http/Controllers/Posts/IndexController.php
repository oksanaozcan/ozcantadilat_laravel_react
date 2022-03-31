<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Http\Filters\PostFilter;
use App\Http\Requests\Post\FilterRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class IndexController extends Controller
{
  public function __invoke(FilterRequest $request)
  {
    $data = $request->validated();

    $filter = app()->make(PostFilter::class, ['queryParams' => array_filter($data)]);
    $posts = Post::filter($filter)->paginate(3);
         
    return PostResource::collection($posts);
  }
}
