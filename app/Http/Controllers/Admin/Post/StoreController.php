<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Post\StoreRequest;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
  public function __invoke(StoreRequest $request)
  {
    $data = $request->validated();
    $previewImage = $data['preview_image'];    
    $previewImagePath = Storage::put('/images', $previewImage);
    
    Post::firstOrCreate($data);    
    return response('success', 200);
  }
}

// Category::firstOrCreate(['title' => $data['title']], [
//   'title' => $data['title']
// ]);    
