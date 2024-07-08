import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDataStoreService } from 'src/app/components/service-info/services-data-store.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pd-about-me',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pd-about-me.component.html',
  styleUrls: ['./pd-about-me.component.scss']
})
export class PdAboutMeComponent {

  public serviceInfo = inject(ServicesDataStoreService);

}
