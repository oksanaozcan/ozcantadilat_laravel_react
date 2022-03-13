<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\Category\CategoryResource;
use App\Models\Category;

class IndexController extends Controller
{
  public function __invoke()
  {
    $categories = Category::all();
    return CategoryResource::collection($categories);
  }
}
