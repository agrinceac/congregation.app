<?php
/**
 * Created by PhpStorm.
 * User: dmitricercel
 * Date: 15.11.16
 * Time: 21:04
 */

namespace App\Http\Controllers;

use Illuminate\Support\Facades\View;

class AppController
{
    public function index()
    {
        return View::make('app.index');
    }
}