<?php

namespace App\SpeakersApp\Discourse\Model;

use Illuminate\Database\Eloquent\Model;

class DiscourseCommentary extends Model
{
    const STATUS_ACTIVE = 1;

    protected $table = 'discourses_commentaries';

    protected $dates = ['created_at'];

    public function getText()
    {
        return str_replace("\r\n", "<br>", $this->text);
    }
}
