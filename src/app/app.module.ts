;
import { WinComponent } from './win/win.component';
import { CuddleDogComponent } from './cuddle-dog/cuddle-dog.component';
import { YouLoseNfComponent } from './you-lose-nf/you-lose-nf.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { InBedComponent } from './in-bed/in-bed.component';
import { StillUpComponent } from './still-up/still-up.component';
import { FouramComponent } from './fouram/fouram.component';
import { TossComponent } from './in-bed/toss.component';
import { TurnComponent } from './in-bed/turn.component';
import { TvComponent } from './still-up/tv.component';
import { NfComponent } from './still-up/nf.component';
import { WindowComponent } from './still-up/window.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    InBedComponent,
    StillUpComponent,
    YouLoseNfComponent,
    CuddleDogComponent,
    WinComponent,
    FouramComponent,
    TossComponent,
    TurnComponent,
    TvComponent,
    NfComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
