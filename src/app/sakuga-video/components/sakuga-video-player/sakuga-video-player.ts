import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SakugaService } from '../../../core/services/sakuga.service';
import { VideoData } from '../../../core/models/VideoData';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-sakuga-video-player',
  styleUrl: './sakuga-video-player.scss',
  templateUrl: './sakuga-video-player.html',
})
export class SakugaVideoPlayer implements OnInit {
  videoDatas$!: Observable<VideoData[]>;
  videoDatas!: VideoData[];
  currentIndex: number = -1;
  currentUrl: string = '';
  currentPost: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sakugaService: SakugaService,
  ) {}

  ngOnInit() {
    this.getPlaylist();
  }

  onBack() {
    this.router.navigateByUrl('/');
  }

  getPlaylist() {
    //console.log('params = ' + JSON.stringify(this.route.snapshot.params));
    let username = this.route.snapshot.params['name'];
    this.videoDatas$ = this.sakugaService.getPlaylist(username);
    this.videoDatas$
      .pipe(
        tap((videoDatas) => (this.videoDatas = videoDatas)),
        tap(() => this.setNextVideo()),
      )
      .subscribe();
  }

  requestSimplePlaylist() {
    console.log('Request Playlist');
    this.sakugaService.getSimplePlaylist('Mathxxl');
  }

  setNextVideo() {
    console.log('SetNextVideo');
    this.currentUrl = this.getNextVideo();
    this.currentPost = this.getCurrentPost();
    console.log(`New url is ${this.currentUrl}`);
  }

  getNextVideo(): string {
    console.log(`GetNextVideo at index ${this.currentIndex} with ${this.videoDatas.length} videos`);

    this.currentIndex++;

    if (this.currentIndex >= this.videoDatas.length) {
      this.currentIndex = 0;
    }

    if (this.currentIndex >= this.videoDatas.length || this.currentIndex < 0) {
      console.log('Index is out of range');
      return '';
    } else {
      return this.videoDatas[this.currentIndex].file_url;
    }
  }

  getCurrentPost(): string{
    if(this.currentIndex >= this.videoDatas.length || this.currentIndex < 0) {
      return '';
    } else{
      return `https://www.sakugabooru.com/post/show/${this.videoDatas[this.currentIndex].id}`;
    }
  }
}
