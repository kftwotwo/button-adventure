;
import { WinComponent } from './win/win.component';
import { CuddleDogComponent } from './cuddle-dog/cuddle-dog.component';
import { YouLoseNfComponent } from './you-lose-nf/you-lose-nf.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { InBedComponent } from './in-bed/in-bed.component';
import { StillUpComponent } from './still-up/still-up.component';
import { 4amComponent } from './4am/4am.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    InBedComponent,
    StillUpComponent,
    4amComponent, YouLoseNfComponent, CuddleDogComponent, WinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
