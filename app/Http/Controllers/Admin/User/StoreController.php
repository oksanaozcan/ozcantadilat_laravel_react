<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\StoreRequest;
use App\Models\User;

class StoreController extends Controller
{
  public function __invoke(StoreRequest $request)
  {
    $data = $request->validated();
    User::firstOrCreate($data);    
    return response('success', 200);
  }
}

// Category::firstOrCreate(['title' => $data['title']], [
//   'title' => $data['title']
// ]);    
