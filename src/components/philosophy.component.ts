
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ScrollRevealDirective],
  template: `
    <section class="py-14 bg-white relative">
      <div class="max-w-4xl mx-auto px-6 text-center">
        
        <!-- Anchor Line -->
        <div 
          appScrollReveal="scale-up"
          class="w-px h-16 bg-[#4A3728] mx-auto mb-8"></div>
        
        <h5 
          appScrollReveal="fade-up" 
          delay="200ms"
          class="text-sm font-bold tracking-widest text-[#4A3728] uppercase mb-4">{{ 'HOME.PHILOSOPHY.LABEL' | translate }}</h5>
        
        <h2 
          appScrollReveal="fade-up" 
          delay="300ms"
          class="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-tight mb-8">
          "{{ 'HOME.PHILOSOPHY.QUOTE' | translate }}"
        </h2>
        
        <p 
          appScrollReveal="fade-up" 
          delay="400ms"
          class="text-[#4A4A4A] text-lg font-light max-w-2xl mx-auto">
          {{ 'HOME.PHILOSOPHY.TEXT' | translate }}
        </p>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhilosophyComponent { }
