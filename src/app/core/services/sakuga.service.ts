import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { VideoData } from '../models/VideoData';
import corsfix from 'corsfix';

@Injectable({ providedIn: 'root' })
export class SakugaService {

  constructor(private http: HttpClient) {}

  getPlaylist(username: string): Observable<VideoData[]>{
    console.log("Get playlist for " + username);

    try {
      return this.http
        .get<VideoData[]>(
          '/api/post.json?tags=vote:3:'+`${username}+order:random&limit=1000`,
        )
        .pipe(
          tap((value) =>
            value.forEach((video) => {
              console.log(video.id + ' ==> ' + video.file_url + ' ==> ' + video);
            }),
          ),
        );
    } catch (e) {
      console.log("Error: ", e);
    }

    return this.http.get<VideoData[]>(
      `https://www.sakugabooru.com/post.json?tags=vote:3:${username}+order:random&limit=1000`,
    ).pipe(
      tap((value) => console.log(`Found ${value?.length} values with direct API`)),
    );
  }

  getSimplePlaylist(username2: string){
    return this.getPlaylist(username2);
  }
}
