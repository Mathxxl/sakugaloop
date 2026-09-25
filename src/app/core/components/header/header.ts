import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [
    RouterLink,
  RouterLinkActive
  ],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  constructor(private router: Router) {}

  onAddNewFaceSnap(): void {
    this.router.navigateByUrl('facesnaps/create');
  }
}
