<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class ApiAuthMiddleware
{
    /**
     * @param         $request
     * @param Closure $next
     * @param null    $guard
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (!Auth::guard($guard)->check()) {
            return response('Unauthorized', 401);
        }

        return $next($request);
    }
}
