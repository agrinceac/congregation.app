<?php
/**
 * Created by PhpStorm.
 * User: dmitricercel
 * Date: 14.11.16
 * Time: 21:40
 */

Route::group(['middleware' => 'web'], function () {
    Route::get('discourses/calendar', 'DiscourseController@calendar');
    Route::resource('discourses/{id}/log', 'DiscourseHistoryController');
    Route::resource('discourses', 'DiscourseController');
});