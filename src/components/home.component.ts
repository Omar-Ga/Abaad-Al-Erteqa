import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero.component';
import { GatewayComponent } from './gateway.component';
import { ValuesComponent } from './values.component';
import { PhilosophyComponent } from './philosophy.component';
import { ServicesComponent } from './services.component';
import { SynergyComponent } from './synergy.component';
import { WorkflowComponent } from './workflow.component';
import { StatisticsComponent } from './statistics.component';
import { AboutComponent } from './about.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        GatewayComponent,
        ValuesComponent,
        PhilosophyComponent,
        ServicesComponent,
        SynergyComponent,
        WorkflowComponent,
        StatisticsComponent,
        AboutComponent
    ],
    template: `
    <app-hero></app-hero>
    <app-gateway></app-gateway>
    <app-statistics></app-statistics>
    <app-about></app-about>
    <app-services></app-services>
    <app-synergy></app-synergy>
    <app-workflow></app-workflow>
    <app-values></app-values>
    <app-philosophy></app-philosophy>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
