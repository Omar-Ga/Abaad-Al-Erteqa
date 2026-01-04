
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { GatewayComponent } from './components/gateway.component';
import { ValuesComponent } from './components/values.component';
import { PhilosophyComponent } from './components/philosophy.component';
import { ServicesComponent } from './components/services.component';
import { WorkflowComponent } from './components/workflow.component';
import { FooterComponent } from './components/footer.component';

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
    WorkflowComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
