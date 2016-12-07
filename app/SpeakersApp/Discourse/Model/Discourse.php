<?php

namespace App\SpeakersApp\Discourse\Model;

use App\Time\Day;
use App\Time\Time;
use Illuminate\Database\Eloquent\Model;

class Discourse extends Model
{

    public function assignments()
    {
        return $this->hasMany(DiscourseAssignment::class, 'discourseId', 'id')->orderBy('created_at', 'desc');
    }

    public function commentaries()
    {
        return $this->hasMany(DiscourseCommentary::class, 'discourseId', 'id')->orderBy('created_at', 'desc');
    }

    public function assignment()
    {
        return $this->assignments()->whereRaw('statusId IN ( '.DiscourseAssignment::STATUS_CONFIRMED.', '.DiscourseAssignment::STATUS_PRESET.', '.DiscourseAssignment::STATUS_COMPLETED.' )')->first();
    }

    public function congregation()
    {
        return $this->hasOne(Congregation::class, 'id', 'congregationId');
    }

    public function getDay()
    {
        return Day::parseDayFromYMDHis($this->time);
    }

    public function getTime()
    {
        return Time::parseTimeFromYMDHis($this->time);
    }

    public function setSpeech($id)
    {
        $this->speechId = $id;
        return $this->save();
    }

    public function setSpeaker($id)
    {
        $this->speakerId = $id;
        return $this->save();
    }

    public function isPast()
    {
        return ($this->getDay()->getTimestamp() < time());
    }

    public function nextDate()
    {
        $discourses = new Discourse();
        return $discourses->where('id', '>', $this->id)
                          ->where('congregationId', '=', $this->congregationId)
                          ->orderBy('time', 'ASC')
                          ->take(1)
                          ->first();
    }

    public function prevDate()
    {
        $discourses = new Discourse();
        return $discourses->where('id', '<', $this->id)
                          ->where('congregationId', '=', $this->congregationId)
                          ->orderBy('time', 'DESC')
                          ->take(1)
                          ->first();
    }

    public function setStatus($statusId)
    {
        $this->statusId = $statusId;
        $this->save();
        return $this->id;
    }

    public function __toString()
    {
        $speech  = $this->assignment()->speech;
        $speaker = $this->assignment()->speaker;

        return $this->getDay().' | '.$speaker.' | '.$speech;
    }
}