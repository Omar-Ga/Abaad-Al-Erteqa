
import { Component, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-gateway',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe, LucideAngularModule],
  template: `
    <section class="relative z-30 px-6 pt-24 pb-24 mt-0 bg-[#121212]">
      <div class="max-w-7xl mx-auto mb-16 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-wide">
          {{ 'HOME.GATEWAY.HEADLINE' | translate }}
        </h2>
      </div>
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Card A: Abaad Al-Erteqaa (Blue/Technical Tone) -->
        <div #card class="group relative h-[450px] overflow-hidden rounded-md shadow-2xl cursor-pointer">
          <!-- Background Image -->
          <div class="absolute inset-0 w-full h-full">
            <img 
                ngSrc="assets/images/engineering_blueprint.png" 
                fill 
                class="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-[.in-view]:scale-110"
                alt="Architecture Office"
            >
          </div>
          <!-- Visual Tone Overlay: Technical Blue -->
          <div class="absolute inset-0 bg-slate-900/60 mix-blend-hard-light group-hover:bg-[#4A3728]/60 group-[.in-view]:bg-[#4A3728]/60 transition-colors duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <!-- Content -->
          <div class="absolute inset-0 flex flex-col justify-end p-10">
            <!-- Accent Line -->
            <div class="w-12 h-1 bg-white mb-4 transition-all duration-300 group-hover:w-20 group-[.in-view]:w-20 group-hover:bg-[#4A3728] group-[.in-view]:bg-[#4A3728]"></div>
            
            <h2 class="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 group-[.in-view]:translate-x-2 transition-transform duration-300">{{ 'HOME.GATEWAY.ABAAD.TITLE' | translate }}</h2>
            <p class="text-gray-300 font-medium mb-1">{{ 'HOME.GATEWAY.ABAAD.SUBTITLE' | translate }}</p>
            
            <p class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 group-[.in-view]:opacity-100 transform translate-y-4 group-hover:translate-y-0 group-[.in-view]:translate-y-0 transition-all duration-500 delay-100 max-w-sm">
                {{ 'HOME.GATEWAY.ABAAD.DESC' | translate }}
            </p>
            <div class="mt-6 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 group-[.in-view]:opacity-100 transition-opacity duration-500 delay-200">
                <span>{{ 'HOME.GATEWAY.ABAAD.BTN' | translate }}</span>
                <lucide-icon [name]="'arrow-right'" [size]="18" class="rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"></lucide-icon>
            </div>
          </div>
        </div>

        <!-- Card B: Sama Al-Mamaria (Warm Yellow/Construction Tone) -->
        <div #card class="group relative h-[450px] overflow-hidden rounded-md shadow-2xl cursor-pointer">
           <!-- Background Image -->
           <div class="absolute inset-0 w-full h-full">
            <img 
                ngSrc="assets/images/safety_construction.png" 
                fill 
                class="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-[.in-view]:scale-110"
                alt="Safety Construction"
            >
          </div>
          <!-- Visual Tone Overlay: Warm Bronze/Yellow -->
          <div class="absolute inset-0 bg-[#4A3728]/60 mix-blend-multiply group-hover:bg-[#EBC934]/60 group-[.in-view]:bg-[#EBC934]/60 transition-colors duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <!-- Content -->
           <div class="absolute inset-0 flex flex-col justify-end p-10">
            <!-- Accent Line -->
            <div class="w-12 h-1 bg-white mb-4 transition-all duration-300 group-hover:w-20 group-[.in-view]:w-20 group-hover:bg-[#EBC934] group-[.in-view]:bg-[#EBC934]"></div>
            
            <h2 class="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 group-[.in-view]:translate-x-2 transition-transform duration-300">{{ 'HOME.GATEWAY.SAMA.TITLE' | translate }}</h2>
             <p class="text-gray-300 font-medium mb-1">{{ 'HOME.GATEWAY.SAMA.SUBTITLE' | translate }}</p>
            
            <p class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 group-[.in-view]:opacity-100 transform translate-y-4 group-hover:translate-y-0 group-[.in-view]:translate-y-0 transition-all duration-500 delay-100 max-w-sm">
                {{ 'HOME.GATEWAY.SAMA.DESC' | translate }}
            </p>
             <div class="mt-6 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 group-[.in-view]:opacity-100 transition-opacity duration-500 delay-200">
                <span>{{ 'HOME.GATEWAY.SAMA.BTN' | translate }}</span>
                <lucide-icon [name]="'arrow-right'" [size]="18" class="text-[#EBC934] rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"></lucide-icon>
            </div>
          </div>
        </div>

      </div>


    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GatewayComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('card') cards!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initObserver() {
    this.observer = new IntersectionObserver((entries) => {
      // Only apply on mobile/tablet (arbitrary breakpoint < 768px matches Tailwind md usually)
      if (window.innerWidth >= 768) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of card is visible
    });

    this.cards.forEach(card => this.observer?.observe(card.nativeElement));
  }
}
