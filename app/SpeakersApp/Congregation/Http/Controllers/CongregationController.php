<?php

namespace App\SpeakersApp\Congregation\Http\Controllers;


use App\SpeakersApp\Congregation\Model\Congregation;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class CongregationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $speeches = Congregation::all();

        return response()->json($speeches);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $speaker     = new Congregation();

        $speaker->authorId = Auth::id();
        $speaker->name     = Input::get('name');
        $speaker->code     = Input::get('code');

        $speaker->save();

        return response()->json(true);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $speeches      = new Congregation();
        $speech        = $speeches->findOrFail($id);

        return response()->json($speech);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $speeches = new Congregation();
        $speaker  = $speeches->findOrFail($id);

        $speaker->authorId = Auth::id();
        $speaker->name     = Input::get('name');
        $speaker->code     = Input::get('code');

        $speaker->save();

        return response()->json(true);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $speeches = new Congregation();
        $speaker  = $speeches->findOrFail($id);

        if ( ! $speaker->delete())
        {
            return response()->json(['result'=>false, 'error'=>"Something went wrong when deleting Congregation with ID {$id}"]);
        }

        return response()->json(true);
    }
}
