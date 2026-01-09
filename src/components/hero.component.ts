
import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe],
  template: `
    <section class="relative h-screen min-h-[900px] w-full overflow-hidden flex items-center justify-start">
      
      <!-- Background Slideshow -->
      <div class="absolute inset-0 z-0 bg-gray-900">
        @for (img of images; track img; let i = $index) {
          <div 
            class="absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out"
            [class.opacity-100]="i === activeIndex()"
            [class.opacity-0]="i !== activeIndex()"
          >
             <img [ngSrc]="img" fill priority alt="Hero Background" class="object-cover w-full h-full">
          </div>
        }
      </div>

      <!-- Bronze Overlay (Unification Layer) -->
      <div class="absolute inset-0 z-10 bg-[#4A3728] opacity-35 mix-blend-multiply pointer-events-none"></div>
      
      <!-- Darker Gradient for text readability -->
      <div class="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>

      <!-- Bottom Gradient Blend -->
      <div class="absolute bottom-0 left-0 w-full h-64 z-20 bg-gradient-to-b from-transparent to-[#121212]"></div>

      <!-- Content -->
      <div class="relative z-30 text-start max-w-5xl px-6 md:px-20 animate-fade-in-up mt-24">
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-lg" [innerHTML]="'HOME.TITLE' | translate">
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl font-light leading-relaxed drop-shadow-md">
          {{ 'HOME.SUBTITLE' | translate }}
        </p>
        
        <div class="mt-10 flex flex-col md:flex-row gap-4 justify-start">
             <button class="px-8 py-3 bg-[#4A3728] text-white font-semibold rounded-sm hover:bg-[#3D2B1F] transition-colors shadow-lg hover:shadow-xl">
                {{ 'HOME.SERVICES_BTN' | translate }}
             </button>
             <button class="px-8 py-3 bg-[#EBC934] border border-[#EBC934] text-black font-semibold rounded-sm hover:bg-[#D4B52F] transition-colors shadow-lg">
                {{ 'HOME.PORTFOLIO_BTN' | translate }}
             </button>
        </div>
      </div>

    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  images = [
    'assets/images/architecture_hero.png',
    'assets/images/engineering_blueprint.png',
    'assets/images/urban_landscape.png',
  ];

  activeIndex = signal(0);
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.images.length);
    }, 5000); // 5 seconds rotation
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
