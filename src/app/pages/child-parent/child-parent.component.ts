import { Component } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss']
})
export class ChildParentComponent {
  userDataTable:any=[];

  getData(data:any){
    console.log(data);
    this.userDataTable.push(data)
    console.log(this.userDataTable);
    
  }
}
