
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white relative">
      <div class="max-w-4xl mx-auto px-6 text-center">
        
        <!-- Anchor Line -->
        <div class="w-px h-16 bg-[#8B5E3C] mx-auto mb-8"></div>
        
        <h5 class="text-sm font-bold tracking-widest text-[#8B5E3C] uppercase mb-4">A Legacy of Technical Precision</h5>
        
        <h2 class="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-tight mb-8">
          "Since 2000, our goal has been to upgrade the level of engineering services by combining technical accuracy with speed in performance."
        </h2>
        
        <p class="text-[#4A4A4A] text-lg font-light max-w-2xl mx-auto">
          We invest continuously in our technical assets to maintain the highest standards of engineering excellence.
        </p>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhilosophyComponent {}
