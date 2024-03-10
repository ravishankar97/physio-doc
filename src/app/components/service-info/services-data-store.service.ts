import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataStoreService {

  public allServices = [
    {
      header: 'Pain Management',
      serviceId: '001',
      description: 'Physical therapy pain management is a non-invasive form of treatment that does not require surgery or other invasive procedures'
    },
    {
      header: 'Injury Rehabilitation',
      serviceId: '002',
      description: "Injury rehabilitation in physiotherapy is a crucial aspect of helping individuals recover from various injuries."
    },
    {
      header: 'Neuro Rehab Physiotherapy',
      serviceId: '003',
      description: "Neuro rehab physiotherapy is a type of physical therapy that helps patients with conditions affecting the brain and spinal cord1, such as stroke, spinal cord injury, and Parkinson's disease. The goal is to improve their function and quality of life1. Neuro rehab physiotherapy may include hands-on therapies, specific exercise prescription and a home exercise program2. Patients can receive neuro rehab physiotherapy at home  after being discharged from hospital by therapist supervision"
    },
    {
      header: 'Lyumphatic Drainage',
      serviceId: '004',
      description: 'The first-line treatment for lymphedema is complex physical therapy. This treatment is aimed at improving lymphedema with manual lymphatic drainage, massage, and exercise. It advocates the use of compression stockings (at a minimum of 40 mm Hg), multilayer bandaging, or pneumatic pumps. Leg elevation is essential'
    }
  ]

  constructor() { }
}
