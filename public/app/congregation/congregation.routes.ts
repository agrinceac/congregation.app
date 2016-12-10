import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CongregationComponent} from "./congregation.component";
import {EldersComponent} from "./modules/elders/component/elders.component";
import {ElderComponent} from "./modules/elders/component/elder.component";

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