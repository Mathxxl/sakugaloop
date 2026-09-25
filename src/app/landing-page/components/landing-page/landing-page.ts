import { Component, OnInit } from '@angular/core';
import { SakugaService } from '../../../core/services/sakuga.service';

@Component({
  imports: [],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage implements OnInit{
  constructor(private sakugaService: SakugaService) {}

  ngOnInit(): void {

  }

  requestPlaylist() {
    console.log('Request Playlist');
    this.sakugaService.getPlaylist("")
  }
}
