import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { CustomerDataService } from '../service/customer-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  public tableData: any = [];
  myForm!: FormGroup;

  constructor(private customerData: CustomerDataService) {}

  ngOnInit() {
    this.initForm();
    this.getApiData();
    this.getingTheApiData();
  }

  initForm() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      deparment: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[6-9]\\d{9}$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passWord: new FormControl(null, Validators.required),
      ConfirmPassWord: new FormControl(null, Validators.required),
    });
  }

  public submittedData: any[] = [];

  public serialNumber: number = 1;

  sendingTheData(newData: any) {
    this.customerData.sendTheReactiveFormData(newData).subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit() {
    const formValues = this.myForm.value;

    const newDetail = {
      serialNumber: this.serialNumber++,
      name: formValues.name,
      age: formValues.age,
      deparment: formValues.deparment,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      passWord: formValues.passWord,
      ConfirmPassWord: formValues.ConfirmPassWord,
    };

    this.submittedData.push(newDetail);

    this.sendingTheData(newDetail);

    this.myForm.reset();
  }
  public editingIndex = 0;

  editTheRow(index: number): void {
    const item = this.submittedData[index];

    this.myForm.patchValue({
      name: item.name,
      age: item.age,
      deparment: item.deparment,
      phoneNumber: item.phoneNumber,
      email: item.email,
      passWord: item.passWord,
      ConfirmPassWord: item.ConfirmPassWord,
    });

    this.editingIndex = index;
  }

  deleteTheRow(index: number): void {
    this.submittedData.splice(index, 1);
  }

  public users: any;

  getApiData() {
    this.customerData.getDetails().subscribe((res: any) => {
      console.log(res);
      this.tableData = res;
    });
  }
  getingTheApiData() {
    this.customerData.getTheDetails().subscribe((data: any) => {
      console.log(data);
    });
  }

  onSend() {
    const sample = {
      id: 3,
      name: 'logesh',
    };
    this.customerData.postData(sample).subscribe((res: any) => {
      console.log(res);
    });
  }

  sendTo() {
    const userData = {
      id: 4,
      Name: 'Jeeva',
    };
    this.customerData.sendTheData(userData).subscribe((data: any) => {
      console.log(data);
    });
  }
}
