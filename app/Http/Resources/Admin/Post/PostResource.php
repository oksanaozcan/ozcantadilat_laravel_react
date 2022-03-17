<?php

namespace App\Http\Resources\Admin\Post;

use App\Http\Resources\Admin\Picture\PictureResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
          'content' => $this->content,
          'images' => PictureResource::collection($this->pictures),
          'category_id' => $this->category_id,
          'created_at' => Carbon::parse($this->created_at)->format('M d Y') 
        ];
    }
}
