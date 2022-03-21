<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Post\UpdateRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;
use App\Models\Picture;
use Intervention\Image\Facades\Image;
use Exception;

class UpdateController extends Controller
{
  public function __invoke(UpdateRequest $request, Post $post)
  {
    try {      
      $data = $request->validated();

      $tagIds = $data['tags'];
      unset($data['tags']);

      $picture = $data['preview_image'];
      unset($data['preview_image']);
                 
      $filePath = Storage::disk('public')->put('pictures', $picture);      
      $prev_name = explode('pictures/', $filePath);      
      $prev_name = implode('', $prev_name);
      
      $post->update($data);
      // Picture::create([
      //   'path' => $filePath,
      //   'url' => url('/storage/' . $filePath),
      //   'preview_url' => url('/storage/pictures/preview' . $prev_name),
      //   'post_id' => $post->id
      // ]);  

      // Image::make($picture)->fit(100,100)->save(storage_path('app/public/pictures/preview' . $prev_name));

      $post->tags()->sync($tagIds);

      return response()->json(['message' => 'success']);

    } catch (Exception $exception) {
      abort(404, 'abort');
    }
  }
}
