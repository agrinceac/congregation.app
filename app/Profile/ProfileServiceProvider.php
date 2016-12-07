<?php

namespace App\Profile;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class ProfileServiceProvider extends ServiceProvider {

	public function register()
	{
        
	}

	public function boot(Router $router)
	{
		$router->group(['namespace'=>'App\Profile\Http\Controllers'], function()
		{
			include 'Http' . DIRECTORY_SEPARATOR . 'routes.php';
		});
	}
}
