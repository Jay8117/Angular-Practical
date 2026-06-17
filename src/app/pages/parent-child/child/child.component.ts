import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() studentInfo:any;

  studentData : any =[];

  constructor(){

  }

  ngOnInit(): void {
    console.log(this.studentInfo);

    this.studentData = this.studentInfo;
  }
}
