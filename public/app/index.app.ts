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

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, MaterialModule.forRoot() ],
    declarations: [ CongregationComponent, EldersComponent, ElderComponent, SignInFormComponent ],
    bootstrap:    [ CongregationComponent ]
})
export class IndexModule { }
