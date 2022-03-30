<?php

namespace App\Http\Resources\Post;

use App\Http\Resources\Admin\Picture\PictureResource;
use App\Http\Resources\Admin\Tag\TagResource;
use App\Http\Resources\Profile\Comment\CommentResource;
use Carbon\Carbon;
use App\Models\Category;
use App\Models\PostUserLike;
use Illuminate\Http\Resources\Json\JsonResource;

class SinglePostResource extends JsonResource
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
          'category_id' => Category::find($this->category_id),
          'tags' => TagResource::collection($this->tags),
          'created_at' => Carbon::parse($this->created_at)->format('M d Y'),
          'comments' => CommentResource::collection($this->comments),
          'related_posts' => PostResource::collection($this->relatedPosts),
          'likes' => $this->likes
        ];
    }
}
