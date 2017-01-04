import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import 'rxjs/Rx';
import {MaterialModule} from "@angular/material";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {CongregationModule} from "./congregation/congregation.module";
import {UnauthorizedComponent} from "./core/authorization/unautorized.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotFoundComponent} from "./core/notFound.component";
import {HeaderComponent} from "./dashboard/header.component";

import {SpeakersRoutesModule} from "./congregation/modules/speakers/speakers.routes";
import {SpeakersComponent} from "./congregation/modules/speakers/speakers.component";
import {SpeakerComponent} from "./congregation/modules/speakers/speaker.component";

import {SpeechesRoutesModule} from "./congregation/modules/speeches/speeches.routes";
import {SpeechesComponent} from "./congregation/modules/speeches/speeches.component";

// import {Ng2PaginationModule} from "ng2-pagination";

const appRoutes: Routes = [
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    declarations: [
        IndexComponent,
        UnauthorizedComponent,
        DashboardComponent,
        NotFoundComponent,
        HeaderComponent,

        SpeakersComponent,
        SpeakerComponent,

        SpeechesComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        CongregationModule,

        SpeakersRoutesModule,

        SpeechesRoutesModule
    ],
    bootstrap: [
        IndexComponent
    ]
})
export class IndexModule { }
