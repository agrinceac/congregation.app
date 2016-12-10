import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {CongregationRoutesModule} from "./congregation.routes";
import {CongregationComponent} from "./congregation.component";
import {SignInFormComponent} from "../core/authorization/component/signInForm.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CongregationRoutesModule
    ],
    declarations: [
        CongregationComponent,
        SignInFormComponent
    ]
})
export class CongregationModule {}