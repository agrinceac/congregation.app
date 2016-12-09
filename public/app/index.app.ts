import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CongregationComponent} from "./congregation/congregation.component";
import {EldersComponent} from "./congregation/modules/elders/component/elders.component";
import {HttpModule, XSRFStrategy, CookieXSRFStrategy} from "@angular/http";
import 'rxjs/Rx';
import {ElderComponent} from "./congregation/modules/elders/component/elder.component";
import {MaterialModule} from "@angular/material";
import {SignInFormComponent} from "./core/authorization/component/signInForm.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {CongregationModule} from "./congregation/congregation.module";

const appRoutes: Routes = [];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        CongregationModule
    ],
    declarations: [
        IndexComponent
    ],
    bootstrap: [
        IndexComponent
    ]
})
export class IndexModule { }
