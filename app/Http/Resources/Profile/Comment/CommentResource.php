<?php

namespace App\Http\Resources\Profile\Comment;

use App\Http\Resources\Admin\Picture\PictureResource;
use App\Models\Post;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class CommentResource extends JsonResource
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
          'message' => $this->message,          
          'created_at' => Carbon::parse($this->created_at)->format('M d Y'),          
          'post_id' => $this->post_id,
          'post_title' => Post::find($this->post_id)->title         
        ];
    }
}
