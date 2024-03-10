import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PdAppointmentComponent } from 'src/app/components/pd-appointment/pd-appointment.component';
import { ServiceInfoComponent } from 'src/app/components/service-info/service-info.component';


@Component({
  selector: 'app-pd-home',
  templateUrl: './pd-home.component.html',
  styleUrls: ['./pd-home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatCardModule,
    PdAppointmentComponent,
    ServiceInfoComponent,
    RouterModule
  ]
})
export class PdHomeComponent {

}
