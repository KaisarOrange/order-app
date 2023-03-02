import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss'],
})
export class ThankComponent {
  constructor(private _router: Router) {
    setTimeout(() => {
      this._router.navigate(['order']);
    }, 3500);
  }
}
