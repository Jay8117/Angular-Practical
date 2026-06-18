import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  @Output() dataItem = new EventEmitter<any>();

  sendData(data:any){
    console.log(data.value);
    this.dataItem.emit(data.value)
  }
}
