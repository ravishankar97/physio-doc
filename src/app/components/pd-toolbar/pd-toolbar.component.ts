import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'app-pd-toolbar',
  templateUrl: './pd-toolbar.component.html',
  styleUrls: ['./pd-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdToolbarComponent {

  canDisplayMenu = false;

  private subDestroyer$ = new Subject();

  constructor(viewport: ViewportRuler,
    ngZone: NgZone,
    changeDetectorref: ChangeDetectorRef,
    private act: Router
    ){

    viewport.change(300)
      .pipe(takeUntil(this.subDestroyer$))
      .subscribe(()=>{
        ngZone.run(()=> {
          this.canDisplayMenu = false;
          changeDetectorref.detectChanges();
        })
      })

  }


  onIconClick() {
    this.canDisplayMenu = !this.canDisplayMenu;
  }

  navigate() {

    this.act.navigateByUrl('/#bookAppointment')
  

  }

}
