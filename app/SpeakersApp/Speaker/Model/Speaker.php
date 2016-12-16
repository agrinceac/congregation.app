<?php

namespace App\SpeakersApp\Speaker\Model;

use App\SpeakersApp\Speech\Model\Speech;
use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
    protected $table = 'speakers';

    public function speeches()
    {
        return $this->belongsToMany(Speech::class, 'speakers_speeches', 'speakerId', 'speechId');
    }

    public function status()
    {
        return $this->hasOne( Status::class, 'id', 'statusId');
    }

    public function addSpeech($speechId)
    {
        if ( !$this->speeches->contains($speechId) ) {
            $this->speeches()->attach($speechId);
            return true;
        }
        return false;
    }

    public function removeSpeech($speechId)
    {
        if ( $this->speeches->contains($speechId) ) {
            $this->speeches()->detach($speechId);
            return true;
        }
        return false;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->getLastname().' '.$this->getFirstname().' '.$this->getPatronymic();
    }

    /**
     * @return mixed
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * @return mixed
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * @return mixed
     */
    public function  getPatronymic()
    {
        return $this->patronymic;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function getCode()
    {
        return $this->code;
    }

    public function __toString()
    {
        return $this->getName().' ['.$this->getCode().']';
    }
}
