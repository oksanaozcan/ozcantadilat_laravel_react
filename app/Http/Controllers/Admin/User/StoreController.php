<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\StoreRequest;
use App\Mail\User\PasswordMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class StoreController extends Controller
{
  public function __invoke(Request $request)
  {
    User::withTrashed()->where('email', $request->email)->forceDelete();

    $data = $request->validate([
      'name' => 'required|string',
      'email' => 'required|string|email|unique:users',      
      'role' => 'required',
    ]);    

    $password = Str::random(10);
    $data['password'] = Hash::make($password);
    User::firstOrCreate(['email' => $data['email']], $data);   
    Mail::to($data['email'])->send(new PasswordMail($password));
    return response('success', 200);
  }
}