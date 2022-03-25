<?php

namespace App\Http\Resources\Post;

use App\Http\Resources\Admin\Picture\PictureResource;
use App\Http\Resources\Admin\Tag\TagResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
          'id' => $this->id,
          'title' => $this->title,
          'content' => Str::limit($this->content, 60),
          'images' => PictureResource::collection($this->pictures),
          'category_id' => $this->category_id,
          'tags' => TagResource::collection($this->tags),
          'created_at' => Carbon::parse($this->created_at)->format('M d Y') 
        ];
    }
}
