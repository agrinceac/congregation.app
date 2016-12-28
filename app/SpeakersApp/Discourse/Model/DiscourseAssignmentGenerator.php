<?php
namespace App\SpeakersApp\Discourse\Model;

use Illuminate\Support\Facades\Auth;

class DiscourseAssignmentGenerator
{
    private $_discourse;
    private $_commentaryGenerator;

    public function __construct( Discourse $discourse )
    {
        $this->_discourse = $discourse;
    }

    private function getDiscourse()
    {
        return $this->_discourse;
    }

    private function getCommentaryGenerator()
    {
        if ( !$this->_commentaryGenerator ) {
            $this->_commentaryGenerator = new DiscourseCommentaryGenerator( $this->getDiscourse() );
        }
        return $this->_commentaryGenerator;
    }

    public function create( $speakerId, $speechId, $comment='' )
    {
        $id = $this->_create($speakerId, $speechId);
        if ( $id && $comment ) {
            $this->_createComment($comment);
        }
        return $id;
    }

    private function _cancelOldAssignment()
    {
        if ( $this->getDiscourse()->assignment() ) {
            $changer = new DiscourseAssignmentStatusChanger($this->getDiscourse()->assignment());
            return $changer->toCanceled();
        }
        return true;
    }

    private function _create( $speakerId, $speechId )
    {
        $this->_cancelOldAssignment();

        $assignment = new DiscourseAssignment();

        $assignment->authorId    = Auth::id();
        $assignment->statusId    = DiscourseAssignment::STATUS_PRESET;

        $assignment->discourseId = $this->getDiscourse()->id;
        $assignment->speakerId   = $speakerId;
        $assignment->speechId    = $speechId;

        $assignment->save();
        $this->getCommentaryGenerator()->newAssignment($assignment);

        $this->_attachSpeech($speakerId, $speechId, $assignment);
        return $assignment->id;
    }

    private function _attachSpeech($speakerId, $speechId, $assignment)
    {
        $speakers = new Speaker();
        $speaker = $speakers->find($speakerId);
        if ( !$speaker->speeches->contains($speechId) ) {
            $this->getCommentaryGenerator()->attachSpeech($assignment);
        }
        return $speaker->addSpeech($speechId);
    }

    private function _createComment($text)
    {
        $comment = new DiscourseCommentary();

        $comment->authorId    = Auth::id();
        $comment->statusId    = 1;

        $comment->discourseId = $this->getDiscourse()->id;
        $comment->text = $text;

        $comment->save();

        return $comment->id;
    }
}