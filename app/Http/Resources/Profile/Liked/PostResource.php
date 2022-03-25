<?php

namespace App\Http\Resources\Profile\Liked;

use App\Http\Resources\Admin\Picture\PictureResource;
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
          'images' => PictureResource::collection($this->pictures)         
        ];
    }
}
