import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CongregationComponent} from "./congregation.component";
import {EldersComponent} from "./modules/elders/component/elders.component";
import {ElderComponent} from "./modules/elders/component/elder.component";

const congregationRoutes: Routes = [
    { path: '',  component: CongregationComponent },
    { path: 'elders',  component: EldersComponent },
    { path: 'elders/:id',  component: ElderComponent },
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