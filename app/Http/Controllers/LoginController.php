<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignInRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function signIn(SignInRequest $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        if (Auth::attempt(['email' => $username, 'password' => $password])) {
            return response()->json(true);
        }

        return response('Authorization failed', 401);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();
        return response()->json(true);
    }
}
