<?php

namespace App\SpeakersApp\Speech\Model;

use App\SpeakersApp\Speaker\Model\Speaker;
use Illuminate\Database\Eloquent\Model;

class Speech extends Model
{
    protected $table = 'speeches';

    public function getName()
    {
        return $this->name;
    }

    public function getCode()
    {
        return $this->code;
    }

    public function speakers()
    {
        return $this->belongsToMany(Speaker::class, 'speakers_speeches', 'speechId', 'speakerId');
    }

    public function __toString()
    {
        return $this->getName().' ['.$this->getCode().']';
    }
}
