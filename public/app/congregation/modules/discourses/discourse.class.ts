import * as moment from 'moment/moment';

export class Discourse {

    constructor( public data: any ) {}

    getTime() {
        return this.data.discourse.time;
    }

    getMoment() {
        return moment(this.data.discourse.time);
    }

    getYear() {
        let year: Number;
        year = parseInt(moment(this.data.discourse.time).format('Y'));

        return year;
    }

    getMonth() {
        let month: String;
        month = moment(this.data.discourse.time).format('MMMM');

        return month;
    }

    getMonthNumber() {
        let month: Number;
        month = parseInt(moment(this.data.discourse.time).format('M'));

        return month;
    }

    getId() {
        return this.data.discourse.id;
    }

    getSpeaker() {
        return this.data.discourse.assignment.speaker;
    }

    getSpeech() {
        return this.data.discourse.assignment.speech;
    }

    isAssigned() {
        return this.data.discourse.assignment;
    }

    getAssignment() {
        return this.data.discourse.assignment;
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