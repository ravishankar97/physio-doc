import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdAboutMeComponent } from './pages/pd-about-me/pd-about-me.component';
import { PdHomeComponent } from './pages/pd-home/pd-home.component';

const routes: Routes = [ 
  {
    path: '',
    component: PdHomeComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'about',
    component: PdAboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    scrollPositionRestoration:'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
