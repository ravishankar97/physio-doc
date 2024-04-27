import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomDateAdapter } from 'src/utilities/custom-date-adapter.service';
import { MY_DATE_FORMATS } from 'src/app/app.constants';





@Component({
  selector: 'app-pd-appointment',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule
  ],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
  ],
  templateUrl: './pd-appointment.component.html',
  styleUrls: ['./pd-appointment.component.scss']
})
export class PdAppointmentComponent implements OnInit, OnDestroy {

  @ViewChild(FormGroupDirective)
  private formDir!: FormGroupDirective

  constructor(
    private readonly routerModule: ActivatedRoute
  ){}
  

  public servicesOffered = [
    { code: '001', name: 'Pain Management'},
    { code: '002', name : 'Injury Rehabilitation' },
    { code: '003', name: 'Neuro Rehab Physiotherapy'},
    { code: '004', name: 'Lyumphatic Drainage' },
    { code: '999', name: 'Other'}
  ]

  public customValidatorForSelect = (defaultValue: string): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null=> {
      return control.value === defaultValue ? {error: defaultValue}: null 
    }
    
  }

  public appointmentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    serviceReqd: new FormControl('0', this.customValidatorForSelect('0')),
    doA: new FormControl({value: '', disabled: false}, Validators.required),
    message: new FormControl('', Validators.maxLength(500))
  })

  private subscription = new Subscription();

  ngOnInit() {
    
    this.subscription.add(
      this.appointmentForm.get('serviceReqd')?.valueChanges.subscribe((res)=> {
        if(res === '999') {
          this.appointmentForm.get('message')?.addValidators(Validators.required);
        }else {
          this.appointmentForm.get('message')?.removeValidators(Validators.required);
        }
        this.appointmentForm.get('message')?.updateValueAndValidity();
      })
    )

    this.subscription.add(
    this.routerModule.queryParams.subscribe((res: any)=> {
      if(res.serviceId){
        const isIdPresent = this.servicesOffered.find((r)=> r.code === res.serviceId);
        if(!isIdPresent){
          return;
        }
        this.appointmentForm.get('serviceReqd')?.patchValue(res.serviceId);
      }
    }))

    
  }

  public myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0;
  };

  public onFormSubmit(_event:any){
    console.log(this.appointmentForm.getRawValue());
  }

  onFormReset(event: Event){
    event.preventDefault();
    this.formDir.resetForm({serviceReqd: '0'})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
