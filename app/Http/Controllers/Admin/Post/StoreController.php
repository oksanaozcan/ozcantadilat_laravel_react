<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Post\StoreRequest;
use App\Models\Picture;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class StoreController extends Controller
{
  public function __invoke(StoreRequest $request)
  {
    $data = $request->validated();

    $picture = $data['preview_image'];
    unset($data['preview_image']);

    $post = Post::firstOrCreate($data);

    $filePath = Storage::disk('public')->put('pictures', $picture);
    
    $prev_name = explode('pictures/', $filePath);      
    $prev_name = implode('', $prev_name);
    
    Picture::create([
      'path' => $filePath,
      'url' => url('/storage/' . $filePath),
      'preview_url' => url('/storage/pictures/preview' . $prev_name),
      'post_id' => $post->id
    ]);  

    Image::make($picture)->fit(100,100)->save(storage_path('app/public/pictures/preview' . $prev_name));

    return response()->json(['message' => 'success']);    
  }
}

// Category::firstOrCreate(['title' => $data['title']], [
//   'title' => $data['title']
// ]);    
