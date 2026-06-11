import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {

  userForm! : FormGroup;
  userData :any = [];
  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      name:new FormControl(''),
      skills : this.fb.array([
        this.fb.control('')
      ]
      )
    })
  }

  get skills():FormArray{
    return this.userForm.get('skills') as FormArray
  }

  ngOnInit(): void {
    
  }
  addSkill(){
    this.skills.push(
      this.fb.control('')
    )
  }
  removeSkill(i:number){
    this.skills.removeAt(i)
  }

  getData(){
    console.log(this.userForm.value);
    this.userData = [];
    this.userData.push(this.userForm.value)
    console.log(this.userData);
  }
}
