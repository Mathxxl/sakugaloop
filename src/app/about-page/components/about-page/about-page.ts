import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  constructor(private router: Router) {}

  onGoHome() {
    this.router.navigateByUrl('/');
  }
}
