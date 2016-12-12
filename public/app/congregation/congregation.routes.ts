import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CongregationComponent} from "./congregation.component";

const congregationRoutes: Routes = [
    { path: '',  component: CongregationComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(congregationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CongregationRoutesModule { }