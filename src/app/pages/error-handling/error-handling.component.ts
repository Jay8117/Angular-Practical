import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {
  userData:any=[];
  constructor(private userService : CommonService){

  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe({
      next : (res) => {
        console.log(res);
        this.userData=res;
        
      },
      error : (err) =>{
        console.log(err.message);
        
      }
    })
  }

}
