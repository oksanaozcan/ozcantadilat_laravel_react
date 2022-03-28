<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';
    protected $guarded = false;

    public function pictures() {
      return $this->hasMany(Picture::class, 'post_id', 'id');
    }

    public function tags() {
      return $this->belongsToMany(Tag::class, 'post_tags', 'post_id', 'tag_id');
    }

    public function likedPost() 
    {
      $this->belongsToMany(User::class, 'post_user_likes', 'post_id', 'user_id');
    }
}
