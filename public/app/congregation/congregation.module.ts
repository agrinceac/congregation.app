import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {CongregationRoutesModule} from "./congregation.routes";
import {CongregationComponent} from "./congregation.component";
import {SignInFormComponent} from "../core/authorization/component/signInForm.component";
import {EldersComponent} from "./modules/elders/component/elders.component";
import {ElderComponent} from "./modules/elders/component/elder.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CongregationRoutesModule
    ],
    declarations: [
        CongregationComponent,
        SignInFormComponent,
        EldersComponent,
        ElderComponent
    ]
})
export class CongregationModule {}