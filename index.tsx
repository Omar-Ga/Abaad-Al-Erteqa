
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { AppComponent } from './src/app.component';
import { provideZonelessChangeDetection, importProvidersFrom, APP_INITIALIZER, inject } from '@angular/core';
import { routes } from './src/app.routes';
import { TranslationService } from './src/services/translation.service';
import {
  LucideAngularModule,
  Menu, X, ChevronDown, ArrowRight,
  Phone, Mail, MessageCircle, MapPin,
  Zap, ShieldCheck, Cpu, Clock,
  PencilRuler, Map, Hammer, Trees,
  Building2, ShieldAlert
} from 'lucide-angular';

// Factory function for APP_INITIALIZER
function initializeApp(): () => Promise<void> {
  const translationService = inject(TranslationService);
  return () => translationService.initTranslations();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true
    },
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu, X, ChevronDown, ArrowRight,
        Phone, Mail, MessageCircle, MapPin,
        Zap, ShieldCheck, Cpu, Clock,
        PencilRuler, Map, Hammer, Trees,
        Building2, ShieldAlert
      })
    )
  ]
}).catch((err) => console.error(err));

