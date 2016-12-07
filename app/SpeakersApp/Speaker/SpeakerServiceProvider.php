<?php

namespace App\SpeakersApp\Speaker;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class SpeakerServiceProvider extends ServiceProvider {

	public function register()
	{
        
	}

	public function boot(Router $router)
	{
		$router->group(['namespace'=>'App\SpeakersApp\Speaker\Http\Controllers'], function()
		{
			include 'Http' . DIRECTORY_SEPARATOR . 'routes.php';
		});
	}
}
