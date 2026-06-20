import { Component,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit {
@ViewChild('name') el!:ElementRef;
@ViewChild(ViewChildrenComponent) child!:ViewChildrenComponent;

  focus(data:any){
    this.el.nativeElement.focus();
    
  }
  ngAfterViewInit(): void {
    
  }

  callChild(){
    this.child.showMessage();
    console.log(this.child.data);
    
  }
}
