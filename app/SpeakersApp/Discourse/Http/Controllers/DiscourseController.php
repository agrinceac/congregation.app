<?php

namespace App\SpeakersApp\Discourse\Http\Controllers;

use App\SpeakersApp\Discourse\Model\Discourse;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class DiscourseController extends Controller
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
        $user = Auth::user();
        $discourses = Discourse::where('congregationId', '=', $user->congregationId)->orderBy('time', 'asc')->paginate(10);

        return response()->json($discourses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $discourse = new Discourse();

        $discourse->authorId       = Auth::id();
        $discourse->statusId       = 1;

        $discourse->congregationId = Input::get('congregationId');
        $discourse->speakerId      = Input::get('speakerId');
        $discourse->speechId       = Input::get('speechId');
        $discourse->time           = Input::get('time');


        $discourse->save();

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
        $discourses    = new Discourse();
        $discourse       = $discourses->findOrFail($id);

        return response()->json($discourse);
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
        $discourses = new Discourse();
        $discourse  = $discourses->findOrFail($id);

        $discourse->authorId       = Auth::id();
        $discourse->statusId       = Input::get('statusId');
        $discourse->congregationId = Input::get('congregationId');
        $discourse->speakerCode    = Input::get('speakerId');
        $discourse->speechCode     = Input::get('speechId');
        $discourse->time           = Input::get('time');

        $discourse->save();

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
        $discourses = new Discourse();
        $discourse  = $discourses->findOrFail($id);

        if ( ! $discourse->delete())
        {
            return response()->json(['result'=>false, 'error'=>"Something went wrong when deleting Discourse with ID {$id}"]);
        }

        return response()->json(true);
    }

    public function setSpeech()
    {
        $discourses = new Discourse();
        $discourse = $discourses->findOrFail((int)Input::get('objectId'));

        return response()->json($discourse->setSpeech(Input::get('speechId')));
    }

    public function setSpeaker()
    {
        $discourses = new Discourse();
        $discourse = $discourses->findOrFail((int)Input::get('objectId'));

        return response()->json($discourse->setSpeaker(Input::get('speakerId')));
    }
}
