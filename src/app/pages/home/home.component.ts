import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {

  }

  loginCard() {
    this.router.navigate(['/login'])
  }
  reactiveFormCard() {
    this.router.navigate(['/reactive-form'])
  }
  dynamicFieldCard() {
    this.router.navigate(['/dynamic-field'])
  }
  demo() {
    this.router.navigate(['/login'])
  }
}
