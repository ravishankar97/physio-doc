import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDataStoreService } from './services-data-store.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-info',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  
  ],
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent {



  constructor(
    private readonly serviceStore: ServicesDataStoreService
  ){}

  public allServices = this.serviceStore.allServices;



  

}
