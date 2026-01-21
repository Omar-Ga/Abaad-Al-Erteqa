import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero.component';
import { GatewayComponent } from './gateway.component';
import { ValuesComponent } from './values.component';
import { PhilosophyComponent } from './philosophy.component';
import { ServicesComponent } from './services.component';
import { SynergyComponent } from './synergy.component';
import { StatisticsComponent } from './statistics.component';
import { AboutComponent } from './about.component';
import { PartnersMarqueeComponent } from './partners-marquee.component';
import { ClientsMarqueeComponent } from './clients-marquee.component';

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
        StatisticsComponent,
        AboutComponent,
        PartnersMarqueeComponent,
        ClientsMarqueeComponent
    ],
    template: `
    <app-hero></app-hero>
    <app-statistics></app-statistics>
    <app-gateway></app-gateway>
    <app-about></app-about>
    <app-services></app-services>
    <app-partners-marquee></app-partners-marquee>
    <app-clients-marquee></app-clients-marquee>
    <app-synergy></app-synergy>
    <app-values></app-values>
    <app-philosophy></app-philosophy>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
