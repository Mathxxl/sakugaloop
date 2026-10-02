import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { VideoData } from '../models/VideoData';

@Injectable({ providedIn: 'root' })
export class SakugaService {
  constructor(private http: HttpClient) {}

  getPlaylist(username: string): Observable<VideoData[]>{
    console.log("Get playlist for " + username);
    return this.http.get<VideoData[]>(
      `https://proxy.corsfix.com/?https://www.sakugabooru.com/post.json?tags=vote:3:${username}+order:random&limit=1000`,
    ).pipe(tap(
      value => value.forEach(video => {console.log(video.id + " ==> " + video.file_url + " ==> " + video)}),
    ))

    let res2 = this.http.get(
      'https://www.sakugabooru.com/post.json?tags=vote:3:Mathxxl+order:random&limit=1000',
    );
    res2.pipe(tap(value => console.log("laplus test : " + value))).subscribe();
  }

  getSimplePlaylist(username2: string){
    return this.getPlaylist(username2);
  }
}
