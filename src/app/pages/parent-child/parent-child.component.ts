import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {
studentData:any=[
    {id:1 , name:'jay' , class:'12th' , result:'Pass'},
    {id:2 , name:'Sam' , class:'12th' , result:'Fail'},
    {id:3 , name:'Tony' , class:'12th' , result:'Pass'},
    {id:4 , name:'Linda' , class:'12th' , result:'Fail'},
  ]

  @Input() studentInfo :any;

  constructor(){}

  ngOnInit(): void {
    console.log(this.studentInfo);
    
  }

}
