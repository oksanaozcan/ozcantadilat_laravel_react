<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Tag\UpdateRequest;
use App\Http\Resources\Admin\Tag\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
  public function __invoke(UpdateRequest $request, Tag $tag)
  {
    $data = $request->validated();
    $tag->update($data);
    return new TagResource($tag);
  }
}
