<?php

namespace App\SpeakersApp\Discourse;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class DiscourseServiceProvider extends ServiceProvider {

	public function register()
	{
        
	}

	public function boot(Router $router)
	{
		$router->group(['namespace'=>'App\SpeakersApp\Discourse\Http\Controllers'], function()
		{
			include 'Http' . DIRECTORY_SEPARATOR . 'routes.php';
		});
	}
}
