<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProfileRouteTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        \Illuminate\Support\Facades\Auth::attempt(['email' => 'd.cercel@webdelo.org', 'password' => 'GhbdtnLbvf1']);

        $this->get('api/profile')
            ->seeJsonStructure([
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
                'congregation_id',
                'congregation' => [
                    'id', 'name', 'code', 'address',
                    'meetingTime', 'meetingDay', 'authorId',
                    'created_at', 'updated_at'
                ]
            ]);
    }
}
