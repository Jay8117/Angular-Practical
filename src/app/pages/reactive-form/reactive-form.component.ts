import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  empForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    skill: new FormControl('', [Validators.required,this.skillValidator]),
    salary: new FormControl('', [Validators.minLength(5), Validators.maxLength(8)])
  })

  skillValidator(control:AbstractControl):ValidationErrors | null{
    const skill = control.value;
    if(skill !== 'Angular'){
      return {invalidSkill : true};
    }
    return null;
  }
  constructor() {
  }

  ngOnInit(): void {
    this.empForm.patchValue({
      name: 'Jay',
      email: 'jay@gmail.com',
      skill: 'Angular',
      salary: '234567'
    })
  }

  submit() {
    console.log(this.empForm.value);

  }

}
