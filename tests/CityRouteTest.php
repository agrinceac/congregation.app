<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CityRouteTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $this->withoutMiddleware();

        $this->get('api/city')
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'name',
                    'alias',
                    'description',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }
}
