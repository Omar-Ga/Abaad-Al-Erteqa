
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { GatewayComponent } from './components/gateway.component';
import { ValuesComponent } from './components/values.component';
import { PhilosophyComponent } from './components/philosophy.component';
import { ServicesComponent } from './components/services.component';
import { SynergyComponent } from './components/synergy.component';
import { WorkflowComponent } from './components/workflow.component';
import { FooterComponent } from './components/footer.component';
import { StatisticsComponent } from './components/statistics.component';
import { AboutComponent } from './components/about.component';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    GatewayComponent,
    ValuesComponent,
    PhilosophyComponent,
    ServicesComponent,
    SynergyComponent,
    WorkflowComponent,
    FooterComponent,
    StatisticsComponent,
    AboutComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-gateway></app-gateway>
    <app-statistics></app-statistics>
    <app-about></app-about>
    <app-services></app-services>
    <app-synergy></app-synergy>
    <app-workflow></app-workflow>
    <app-values></app-values>
    <app-philosophy></app-philosophy>
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
