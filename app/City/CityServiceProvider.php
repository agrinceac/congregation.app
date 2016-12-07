<?php

namespace App\City;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class CityServiceProvider extends ServiceProvider {

	public function register()
	{
        
	}

	public function boot(Router $router)
	{
		$router->group(['namespace'=>'App\City\Http\Controllers'], function()
		{
			include 'Http' . DIRECTORY_SEPARATOR . 'routes.php';
		});
	}
}
