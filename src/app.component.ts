
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { SplashComponent } from './components/splash.component';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    SplashComponent
  ],
  template: `
    <app-splash></app-splash>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private lenis: Lenis | undefined;

  ngOnInit() {
    this.lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }

  ngOnDestroy() {
    this.lenis?.destroy();
  }
}
