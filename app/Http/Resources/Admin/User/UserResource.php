<?php

namespace App\Http\Resources\Admin\User;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
          'name' => $this->name,
          'email' => $this->email,
          'role' => $this->role,
          'created_at' => Carbon::parse($this->created_at)->format('M d Y')
        ];
    }
}
