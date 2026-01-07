
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe],
  template: `
    <section class="relative py-24 overflow-hidden">
      <!-- Background Image with Parallax-like fixity (optional) or just cover -->
      <div class="absolute inset-0 z-0">
        <img 
            ngSrc="assets/images/synergy-bg.png" 
            fill 
            class="object-cover w-full h-full grayscale brightness-50"
            alt="Engineering Detail"
        >
      </div>
      
      <!-- Overlay for text readability (Dark Bronze/Black gradient) -->
      <div class="absolute inset-0 z-10 bg-gradient-to-r from-[#1A140F]/90 via-[#1A140F]/70 to-[#4A3728]/60 mix-blend-multiply"></div>
      
      <!-- Content grid -->
      <div class="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        
        @for (stat of stats; track stat.key) {
          <div class="flex flex-col items-center group">
            <div 
              class="text-6xl md:text-7xl font-bold mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              [ngClass]="stat.color"
            >
              {{ stat.value }}
            </div>
            <p class="text-xl md:text-2xl font-light tracking-wider opacity-90">{{ 'HOME.STATS.' + stat.key | translate }}</p>
            <div class="w-12 h-1 mt-4 rounded-full" [ngClass]="stat.bar"></div>
          </div>
        }

      </div>

      <!-- Decorative bottom fade -->
      <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-10"></div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  stats = [
    { value: '+348', key: 'PROJECTS', color: 'text-[#EBC934]', bar: 'bg-white/30' },
    { value: '+545', key: 'CLIENTS', color: 'text-white', bar: 'bg-[#EBC934]/70' },
    { value: '+549', key: 'DESIGNS', color: 'text-[#EBC934]', bar: 'bg-white/30' },
  ];
}
