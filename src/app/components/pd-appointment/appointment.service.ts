import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppointmentService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public sendEmail(event:any) {
    const URL = 'https://qraginr8xa.execute-api.us-east-2.amazonaws.com/production';
    this.httpClient.post(URL, event).subscribe((res)=>{
      console.log("API is accessible", res);
    },(err)=>{
      console.log("API is inaccessible", err);
    })
  }
}
