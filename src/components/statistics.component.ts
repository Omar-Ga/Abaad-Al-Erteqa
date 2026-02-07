import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe, ScrollRevealDirective],
  template: `
    <section class="relative py-24 overflow-hidden" #statsSection>
      <!-- Background Image with Parallax-like fixity (optional) or just cover -->
      <div class="absolute inset-0 z-0">
        <img 
            ngSrc="assets/images/stats_bg_v2.png" 
            fill 
            class="object-cover w-full h-full grayscale brightness-50"
            alt="Engineering Detail"
        >
      </div>
      
      <!-- Overlay for text readability (Dark Bronze/Black gradient) -->
      <div class="absolute inset-0 z-10 bg-gradient-to-r from-[#1A140F]/90 via-[#1A140F]/70 to-[#4A3728]/60 mix-blend-multiply"></div>
      
      <!-- Content grid -->
      <div class="relative z-20 max-w-7xl mx-auto px-6">
        
        <div class="text-center mb-16">
          <h2 
            appScrollReveal="curtain"
            class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
            {{ 'HOME.STATS.HEADER' | translate }}
          </h2>
          <div 
            appScrollReveal="wipe" 
            delay="300ms"
            class="w-24 h-1.5 bg-[#EBC934] mx-auto rounded-full"></div>
          <!-- Description Text -->
          <p 
            appScrollReveal="blur-motion" 
            delay="500ms"
            class="text-white/90 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto font-light mt-8">
            {{ 'HOME.STATS.DESCRIPTION' | translate }}
          </p>
        </div>

        <div 
          appScrollReveal="blur-motion" 
          delay="600ms"
          class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        
          @for (stat of stats; track stat.key) {
            <div class="flex flex-col items-center group">
              <div 
                class="text-6xl md:text-7xl font-bold mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                [ngClass]="stat.color"
              >
                {{ stat.prefix }}{{ stat.displayValue }}
              </div>
              <p class="text-xl md:text-2xl font-light tracking-wider opacity-90">{{ 'HOME.STATS.' + stat.key | translate }}</p>
              <div class="w-12 h-1 mt-4 rounded-full" [ngClass]="stat.bar"></div>
            </div>
          }

        </div>

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
export class StatisticsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') sectionRef!: ElementRef;

  stats = [
    { target: 348, displayValue: 0, prefix: '+', key: 'PROJECTS', color: 'text-[#EBC934]', bar: 'bg-white/30' },
    { target: 545, displayValue: 0, prefix: '+', key: 'CLIENTS', color: 'text-white', bar: 'bg-[#EBC934]/70' },
    { target: 500, displayValue: 0, prefix: '+', key: 'DESIGNS', color: 'text-[#EBC934]', bar: 'bg-white/30' },
  ];

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.startAnimation();
            this.hasAnimated = true;
          }
        });
      }, { threshold: 0.2 });

      if (this.sectionRef) {
        this.observer.observe(this.sectionRef.nativeElement);
      }
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private startAnimation() {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);

      this.stats.forEach(stat => {
        stat.displayValue = Math.floor(stat.target * ease);
      });

      this.cdr.markForCheck();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final values
        this.stats.forEach(stat => {
          stat.displayValue = stat.target;
        });
        this.cdr.markForCheck();
      }
    };

    requestAnimationFrame(step);
  }
}
