<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\StoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class StoreController extends Controller
{
  public function __invoke(Request $request)
  {
    User::withTrashed()->where('email', $request->email)->forceDelete();
    
    $data = $request->validate([
      'name' => 'required|string',
      'email' => 'required|string|email|unique:users',
      'password' => 'required|string',
      'role' => 'required',
    ]);    
    $data['password'] = Hash::make($data['password']);
    User::firstOrCreate(['email' => $data['email']], $data);    
    return response('success', 200);
  }
}