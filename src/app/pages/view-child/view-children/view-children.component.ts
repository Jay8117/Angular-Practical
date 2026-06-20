import { Component } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent {
  showMessage(){
    alert('This is child component method');
  }
  data=[
    1,2,3,4,5,6
  ]
}
