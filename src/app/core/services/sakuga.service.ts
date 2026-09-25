import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { VideoData } from '../models/VideoData';

@Injectable({ providedIn: 'root' })
export class SakugaService {
  constructor(private http: HttpClient) {}

  getPlaylist(username: string){
    let res = this.http.get<VideoData[]>(
      'https://www.sakugabooru.com/post.json?tags=vote:3:Mathxxl+order:random&limit=1000',
    );
    res.pipe(tap(
      value => console.log(value),
    )).subscribe()
  }
}
