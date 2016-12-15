import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {CongregationRoutesModule} from "./congregation.routes";
import {CongregationComponent} from "./congregation.component";
import {SignInComponent} from "../core/authorization/component/signIn.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CongregationRoutesModule
    ],
    declarations: [
        CongregationComponent,
        SignInComponent
    ]
})
export class CongregationModule {}