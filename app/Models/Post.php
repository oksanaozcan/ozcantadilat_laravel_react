<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = 'posts';
    protected $guarded = false;

    // protected $withCount = ['likedPost'];

    public function pictures() {
      return $this->hasMany(Picture::class, 'post_id', 'id');
    }

    public function tags() {
      return $this->belongsToMany(Tag::class, 'post_tags', 'post_id', 'tag_id');
    }

    public function likedPost() 
    {
      return $this->belongsToMany(User::class, 'post_user_likes', 'post_id', 'user_id');
    }

    public function comments() 
    {
      return $this->hasMany(Comment::class, 'post_id', 'id');
    }

    public function relatedPosts() 
    {
      return $this->hasMany(Post::class, 'category_id', 'category_id')->where('id', '!=', $this->id)->limit(3);      
    }

    public function likes() 
    {
      return $this->hasMany(PostUserLike::class, 'post_id', 'id')->select(['user_id']);
    }
}
