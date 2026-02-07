import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, Building2, ShieldAlert } from 'lucide-angular';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';


@Component({
  selector: 'app-synergy',
  standalone: true,
  imports: [CommonModule, TranslatePipe, LucideAngularModule, NgOptimizedImage, RouterLink, ScrollRevealDirective],
  template: `
    <section id="synergy" class="relative pt-6 pb-16 md:py-16 overflow-hidden bg-[#1A1A1A]">
      <!-- Background Image with Dark Overlay -->
      <div class="absolute inset-0 z-0">
        <img 
          ngSrc="assets/images/stats_background.png" 
          fill
          alt="" 
          class="object-cover opacity-50"
        />
      </div>

      <!-- Content Container -->
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 
            appScrollReveal="curtain"
            class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ 'HOME.SYNERGY.HEADER' | translate }}
          </h2>
          <div 
            appScrollReveal="wipe" 
            delay="200ms"
            class="w-32 h-1 bg-gradient-to-r from-[#4A3728] via-[#EBC934] to-[#4A3728] mx-auto"></div>
          <p 
            appScrollReveal="blur-motion" 
            delay="400ms"
            class="text-[#A0A0A0] mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            {{ 'HOME.SYNERGY.SUBHEADER' | translate }}
          </p>
        </div>

        <!-- Two Column Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <!-- Abaad Column -->
          <div 
            appScrollReveal="skew-up" 
            delay="500ms"
            class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#4A3728]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative bg-[#1A1A1A]/60 backdrop-blur-md border border-[#4A3728]/30 rounded-2xl p-8 h-full hover:border-[#4A3728]/60 transition-all duration-500">
              <!-- Company Header -->
              <div class="flex items-center gap-4 mb-6 pb-4 border-b border-[#4A3728]/30">
                <div class="w-14 h-14 bg-gradient-to-br from-[#4A3728] to-[#6B4D3B] rounded-xl flex items-center justify-center shadow-lg shadow-[#4A3728]/30">
                  <lucide-icon [name]="'building-2'" [size]="28" class="text-white" [strokeWidth]="1.5"></lucide-icon>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">{{ 'HOME.SYNERGY.ABAAD.TITLE' | translate }}</h3>
                  <p class="text-[#A0A0A0] text-sm">{{ 'HOME.SYNERGY.ABAAD.SUBTITLE' | translate }}</p>
                </div>
              </div>

              <!-- Services List -->
              <ul class="space-y-4">
                @for (service of abaadServices; track service.key) {
                  <li class="group/item flex items-start gap-4">
                    <div class="w-2 h-2 bg-[#4A3728] rounded-full mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h4 class="text-white font-semibold text-lg mb-1">{{ 'HOME.SYNERGY.ABAAD.SERVICES.' + service.key + '.TITLE' | translate }}</h4>
                      <p class="text-[#8A8A8A] text-sm leading-relaxed">{{ 'HOME.SYNERGY.ABAAD.SERVICES.' + service.key + '.DESC' | translate }}</p>
                    </div>
                  </li>
                }
              </ul>

              <!-- Contact Button -->
              <div class="mt-8 flex justify-start">
                <a 
                  routerLink="/contact" 
                  class="inline-block px-8 py-4 bg-[#4A3728] text-white font-bold text-lg rounded-xl hover:bg-[#5d4632] transition-all duration-300 shadow-lg shadow-[#4A3728]/30 hover:shadow-xl hover:shadow-[#4A3728]/40 hover:-translate-y-1"
                >
                  {{ 'HOME.SYNERGY.CONTACT_BTN' | translate }}
                </a>
              </div>
            </div>
          </div>

          <!-- Sama Column -->
          <div 
            appScrollReveal="skew-up" 
            delay="700ms"
            class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#EBC934]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative bg-[#1A1A1A]/60 backdrop-blur-md border border-[#EBC934]/30 rounded-2xl p-8 h-full hover:border-[#EBC934]/60 transition-all duration-500">
              <!-- Company Header -->
              <div class="flex items-center gap-4 mb-6 pb-4 border-b border-[#EBC934]/30">
                <div class="w-14 h-14 bg-gradient-to-br from-[#EBC934] to-[#B89C28] rounded-xl flex items-center justify-center shadow-lg shadow-[#EBC934]/30">
                  <lucide-icon [name]="'shield-alert'" [size]="28" class="text-[#1A1A1A]" [strokeWidth]="1.5"></lucide-icon>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">{{ 'HOME.SYNERGY.SAMA.TITLE' | translate }}</h3>
                  <p class="text-[#A0A0A0] text-sm">{{ 'HOME.SYNERGY.SAMA.SUBTITLE' | translate }}</p>
                </div>
              </div>

              <!-- Services List -->
              <ul class="space-y-4">
                @for (service of samaServices; track service.key) {
                  <li class="group/item flex items-start gap-4">
                    <div class="w-2 h-2 bg-[#EBC934] rounded-full mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h4 class="text-white font-semibold text-lg mb-1">{{ 'HOME.SYNERGY.SAMA.SERVICES.' + service.key + '.TITLE' | translate }}</h4>
                      <p class="text-[#8A8A8A] text-sm leading-relaxed">{{ 'HOME.SYNERGY.SAMA.SERVICES.' + service.key + '.DESC' | translate }}</p>
                    </div>
                  </li>
                }
              </ul>

              <!-- Contact Button -->
              <div class="mt-8 flex justify-start">
                <a 
                  routerLink="/contact" 
                  class="inline-block px-8 py-4 bg-[#EBC934] text-[#1A1A1A] font-bold text-lg rounded-xl hover:bg-[#d4b42e] transition-all duration-300 shadow-lg shadow-[#EBC934]/30 hover:shadow-xl hover:shadow-[#EBC934]/40 hover:-translate-y-1"
                >
                  {{ 'HOME.SYNERGY.CONTACT_BTN' | translate }}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-[#4A3728]/50 to-transparent"></div>
      <div class="absolute top-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-[#EBC934]/50 to-transparent"></div>
      <div class="absolute bottom-20 left-10 w-24 h-24 border border-[#4A3728]/20 rounded-full"></div>
      <div class="absolute top-20 right-10 w-16 h-16 border border-[#EBC934]/20 rounded-full"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SynergyComponent {
  abaadServices = [
    { key: 'ARCHITECTURAL' },
    { key: 'SAFETY_DESIGN' },
    { key: 'SUPERVISION' },
    { key: 'URBAN' },
    { key: 'TRAFFIC' },
  ];

  samaServices = [
    { key: 'FIREFIGHTING' },
    { key: 'WARNING' },
    { key: 'MAINTENANCE' },
    { key: 'EQUIPMENT' },
  ];
}
