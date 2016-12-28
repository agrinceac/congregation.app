import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiscourseComponent} from "./discourse.component";
import {DiscoursesComponent} from "./discourses.component";
import {DiscoursesCalendarComponent} from "./calendar.component";

const routes: Routes = [
    { path: 'discourses',  component: DiscoursesCalendarComponent },
    { path: 'discourses/calendar',  component: DiscoursesCalendarComponent },
    { path: 'discourses/:id',  component: DiscourseComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DiscoursesRoutesModule { }