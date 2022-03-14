<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Http\Resources\Admin\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
  public function __invoke(UpdateRequest $request, Category $category)
  {
    $data = $request->validated();
    $category->update($data);
    return new CategoryResource($category);
  }
}
