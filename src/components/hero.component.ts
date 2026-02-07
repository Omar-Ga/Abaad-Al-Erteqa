
import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
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
             <img [ngSrc]="img" fill priority alt="Hero Background" class="object-cover w-full h-full hero-image-enhanced">
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
      <div class="relative z-30 text-start max-w-6xl px-6 md:px-20 animate-fade-in-up mt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl hero-title" [innerHTML]="'HOME.TITLE' | translate">
        </h1>
        <p class="text-lg md:text-2xl text-white/95 max-w-4xl font-medium leading-relaxed drop-shadow-lg mb-10">
          {{ 'HOME.SUBTITLE' | translate }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button (click)="scrollToSynergy()" class="group px-8 py-4 bg-[#4A3728] text-white font-bold text-lg rounded-lg hover:bg-[#5d4632] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 cursor-pointer">
            {{ 'HOME.SERVICES_BTN' | translate }}
            <span class="group-hover:translate-x-1 transition-transform duration-300">←</span>
          </button>
          <button (click)="scrollToSynergy()" class="group px-8 py-4 bg-[#EBC934] text-[#1A1A1A] font-bold text-lg rounded-lg hover:bg-[#d4b42e] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 cursor-pointer">
            {{ 'HOME.PORTFOLIO_BTN' | translate }}
            <span class="group-hover:translate-x-1 transition-transform duration-300">←</span>
          </button>
        </div>
      </div>

    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
    }
    .animate-fade-in-up {
        animation: fadeInUp 1.2s ease-out forwards;
    }
    .hero-title {
        text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3);
        letter-spacing: -0.02em;
    }
    .hero-image-enhanced {
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        filter: contrast(1.05) saturate(1.1) brightness(1.02);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1.01);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  images = [
    'assets/images/swrhome1/1.webp',
    'assets/images/swrhome1/2.webp',
    'assets/images/swrhome1/3.webp',
    'assets/images/swrhome1/4.webp',
  ];

  activeIndex = signal(0);
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToSynergy() {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById('synergy');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.images.length);
    }, 5000); // 5 seconds rotation
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
