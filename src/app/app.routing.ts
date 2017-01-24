import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { InBedComponent } from './in-bed/in-bed.component';
import { TossComponent } from './in-bed/toss.component';
import { TurnComponent } from './in-bed/turn.component';
import { NfComponent } from './still-up/nf.component';
import { TvComponent } from './still-up/tv.component';
import { WindowComponent } from './still-up/window.component';
import { FouramComponent } from './fouram/fouram.component';
import { StillUpComponent } from './still-up/still-up.component';
import { WinComponent } from './win/win.component';
import { CuddleDogComponent } from './cuddle-dog/cuddle-dog.component';
import { YouLoseNfComponent } from './you-lose-nf/you-lose-nf.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CreationComponent
  },
  {
    path: 'in-bed',
    component: InBedComponent
  },
  {
    path: 'toss',
    component: TossComponent
  },
  {
    path: 'turn',
    component: TurnComponent
  },
  {
    path: 'nf',
    component: NfComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: 'window',
    component: WindowComponent
  },
  {
    path: 'fouram',
    component: FouramComponent
  },
  {
    path: 'still-up',
    component: StillUpComponent
  },
  {
    path: 'you-lose-nf',
    component: YouLoseNfComponent
  },
  {
    path: 'win',
    component: WinComponent
  },
  {
    path: 'cuddle-dog',
    component: CuddleDogComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
