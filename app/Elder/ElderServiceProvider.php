<?php

namespace App\Elder;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class ElderServiceProvider extends ServiceProvider {

	public function register()
	{
        
	}

	public function boot(Router $router)
	{
		$router->group(['namespace'=>'App\Elder\Http\Controllers'], function()
		{
			include 'Http' . DIRECTORY_SEPARATOR . 'routes.php';
		});
	}
}
