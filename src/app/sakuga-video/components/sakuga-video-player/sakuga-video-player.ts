import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-sakuga-video-player',
  styleUrl: './sakuga-video-player.scss',
  templateUrl: './sakuga-video-player.html',
})
export class SakugaVideoPlayer {
  constructor(private route: ActivatedRoute, private router: Router) {

  }
}
