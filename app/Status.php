<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    public function getName()
    {
        return $this->name;
    }

    public function getColor()
    {
        return $this->color;
    }

    public function setParent($object)
    {
        $this->parent = $object;
        $this->table = $this->parent->getTable().'_statuses';

        return $this;
    }
}
