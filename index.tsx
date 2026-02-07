
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './src/app.component';
import { provideZonelessChangeDetection, importProvidersFrom, APP_INITIALIZER, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './src/app.routes';
import { TranslationService } from './src/services/translation.service';
import {
  LucideAngularModule,
  Menu, X, ChevronDown, ArrowRight,
  Phone, Mail, MessageCircle, MapPin,
  Zap, ShieldCheck, Cpu, Clock,
  PencilRuler, Map, Hammer, Trees,
  Building2, ShieldAlert,
  Globe, Users, Flame, Bell, Wrench, FileText, Check, AlertCircle
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
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
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
        Building2, ShieldAlert,
        Globe, Users, Flame, Bell, Wrench, FileText, Check, AlertCircle
      })
    )
  ]
}).catch((err) => console.error(err));

