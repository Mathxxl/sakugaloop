import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/components/landing-page/landing-page';
import { AboutPage } from './about-page/components/about-page/about-page';
import { SakugaVideoPlayer } from './sakuga-video/components/sakuga-video-player/sakuga-video-player';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'about', component: AboutPage },
  { path: 'loop/:name', component: SakugaVideoPlayer},
];
