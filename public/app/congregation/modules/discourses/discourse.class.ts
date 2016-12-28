import * as moment from 'moment/moment';

export class Discourse {

    constructor( public data: any ) {}

    getTime() {
        return this.data.time;
    }

    getMoment() {
        return moment(this.data.time);
    }

    getYear() {
        let year: Number;
        year = parseInt(moment(this.data.time).format('Y'));

        return year;
    }

    getMonth() {
        let month: String;
        month = moment(this.data.time).format('MMMM');

        return month;
    }

    getMonthNumber() {
        let month: Number;
        month = parseInt(moment(this.data.time).format('M'));

        return month;
    }

    getId() {
        return this.data.id;
    }

    getSpeaker() {
        return this.data.assignment.speaker;
    }

    getSpeech() {
        return this.data.assignment.speech;
    }

    isAssigned() {
        return this.data.assignment;
    }

    getAssignment() {
        return this.data.assignment;
    }

    isConfirmed() {
        return this.getAssignment().conditions.isConfirmed;
    }

    isPreset() {
        return this.getAssignment().conditions.isPreset;
    }

    isMoved() {
        return this.getAssignment().conditions.isMoved;
    }

    isCompleted() {
        return this.getAssignment().conditions.isCompleted;
    }

    isCanceled() {
        return this.getAssignment().conditions.isCanceled;
    }

    fromNow( date ) {
        return moment(date).fromNow();
    }

    calendar( date ) {
        return moment(date).calendar();
    }
}