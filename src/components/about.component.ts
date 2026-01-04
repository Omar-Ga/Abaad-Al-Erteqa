
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe],
  template: `
    <section class="py-32 bg-[#EFE7DD] overflow-hidden relative">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-12deg] origin-top opacity-100 -mr-20 z-0"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        <div class="flex flex-col lg:flex-row items-center gap-20">
          
          <!-- Text Content (Left) -->
          <div class="lg:w-1/2">
            <div class="inline-block px-3 py-1 bg-[#4A3728]/10 text-[#4A3728] font-bold text-xs uppercase tracking-widest mb-6">{{ 'HOME.ABOUT.LABEL' | translate }}</div>
            <h3 class="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight" [innerHTML]="'HOME.ABOUT.TITLE' | translate">
            </h3>
            
            <div class="prose text-[#4A4A4A] leading-relaxed mb-8 text-lg">
              <p class="mb-6">
                {{ 'HOME.ABOUT.DESC' | translate }}
              </p>
              <div class="flex gap-6 mb-6">
                  <div class="w-1 bg-[#4A3728]"></div>
                  <div>
                      <strong class="block text-[#1A1A1A] text-xl mb-1">{{ 'HOME.ABOUT.ABAAD_TITLE' | translate }}</strong>
                      <p class="text-sm">{{ 'HOME.ABOUT.ABAAD_DESC' | translate }}</p>
                  </div>
              </div>
              <div class="flex gap-6">
                  <div class="w-1 bg-[#EBC934]"></div>
                  <div>
                      <strong class="block text-[#1A1A1A] text-xl mb-1">{{ 'HOME.ABOUT.SAMA_TITLE' | translate }}</strong>
                      <p class="text-sm">{{ 'HOME.ABOUT.SAMA_DESC' | translate }}</p>
                  </div>
              </div>
            </div>

            <a href="#" class="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white font-semibold hover:bg-[#4A3728] transition-colors shadow-lg">
              {{ 'HOME.ABOUT.BTN' | translate }}
            </a>
          </div>

          <!-- Visuals (Right - Asymmetric Grid) -->
          <div class="lg:w-1/2 relative h-[600px] w-full mt-12 lg:mt-0">
              
              <!-- Image 1: Engineering -->
              <div class="absolute top-0 right-0 w-3/4 h-3/5 shadow-2xl overflow-hidden z-10 border-4 border-white">
                 <img 
                    ngSrc="assets/images/architecture_hero.png" 
                    fill 
                    class="object-cover hover:scale-105 transition-transform duration-700" 
                    alt="Abaad Engineering"
                >
              </div>
              
              <!-- Image 2: Safety/Construction -->
              <div class="absolute bottom-0 left-0 w-3/4 h-1/2 shadow-2xl overflow-hidden z-20 border-4 border-white">
                 <img 
                    ngSrc="assets/images/safety_construction.png" 
                    fill 
                    class="object-cover hover:scale-105 transition-transform duration-700" 
                    alt="Sama Safety"
                >
              </div>

              <!-- Decorative Square -->
              <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-[#EBC934] -z-0 mix-blend-multiply opacity-80 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent { }
