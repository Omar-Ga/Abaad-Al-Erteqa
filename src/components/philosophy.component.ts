
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-14 bg-white relative">
      <div class="max-w-4xl mx-auto px-6 text-center">
        
        <!-- Anchor Line -->
        <div class="w-px h-16 bg-[#4A3728] mx-auto mb-8"></div>
        
        <h5 class="text-sm font-bold tracking-widest text-[#4A3728] uppercase mb-4">{{ 'HOME.PHILOSOPHY.LABEL' | translate }}</h5>
        
        <h2 class="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-tight mb-8">
          "{{ 'HOME.PHILOSOPHY.QUOTE' | translate }}"
        </h2>
        
        <p class="text-[#4A4A4A] text-lg font-light max-w-2xl mx-auto">
          {{ 'HOME.PHILOSOPHY.TEXT' | translate }}
        </p>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhilosophyComponent { }
