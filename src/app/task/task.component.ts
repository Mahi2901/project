import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.iniatForm();
    this.updateList();

  }

  public myForm!: FormGroup;
  public serialNumber: number = 0;
  public allTask : any[] = [];
  public taskEntireDetail: any[] = [];
  public showCompletedTask : boolean = true ;



  iniatForm() {
    this.myForm = new FormGroup({
      taskname: new FormControl(null, Validators.required),
      taskdescription: new FormControl(null, Validators.required),
      taskdone: new FormControl(false),
    });
  }
  taskDeatilsSumbit() {
    const formValue = this.myForm.value;
    const newTask = {
      serialNumber: this.serialNumber++,
      taskName: formValue.taskname,
      taskdescription: formValue.taskdescription,
      taskcompleted: formValue.taskdone,
    };

    // this.TaskEntierDetail.push(newTask);
    this.allTask.push(newTask);
    this.updateList();
    this.myForm.reset();
  }

   
  toggleListView(){
    this.showCompletedTask = !this.showCompletedTask;
    this.updateList();
  }


  updateList(){
    if (this.showCompletedTask){
      this.taskEntireDetail = [...this.allTask]; // show all
    }
    else{
      this.taskEntireDetail=this.allTask.filter(
        (task: any) => task.taskcompleted !== true || null ); //hide completed
    }
  }


}
