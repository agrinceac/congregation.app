<?php

namespace App\SpeakersApp\Congregation;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class CongregationServiceProvider extends ServiceProvider {

	public function register()
	{
        
	}

	public function boot(Router $router)
	{
		$router->group(['namespace'=>'App\SpeakersApp\Congregation\Http\Controllers'], function()
		{
			include 'Http' . DIRECTORY_SEPARATOR . 'routes.php';
		});
	}
}
