import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about-sama',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="min-h-screen py-32 bg-[#1A1A1A] overflow-hidden relative" dir="auto">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 left-0 w-1/2 h-full bg-[#EBC934]/10 skew-x-[12deg] origin-top opacity-100 -ml-20 z-0"></div>
      
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-12">
            <div class="inline-block">
              <span class="text-sm font-semibold text-[#EBC934]/60 uppercase tracking-widest">
                {{ 'HOME.NAV.ABOUT_US' | translate }}
              </span>
            </div>
            <h1 class="mt-4 text-4xl font-extrabold text-[#EBC934] sm:text-5xl lg:text-6xl">
              {{ 'ABOUT_SAMA.TITLE' | translate }}
            </h1>
            <div class="mt-6 flex items-center justify-center gap-4">
              <div class="h-[2px] w-16 bg-[#EBC934]/30"></div>
              <div class="w-3 h-3 bg-[#EBC934] rotate-45"></div>
              <div class="h-[2px] w-16 bg-[#EBC934]/30"></div>
            </div>
          </div>

          <!-- Main Content Card -->
          <div class="relative mb-12">
            <div class="absolute -inset-4 bg-[#EBC934]/5 rounded-3xl transform -rotate-1"></div>
            <div class="absolute -inset-4 bg-[#EBC934]/5 rounded-3xl transform rotate-1"></div>
            
            <div class="relative bg-[#2A2A2A] rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border border-[#EBC934]/20">
              <!-- Logo/Icon -->
              <div class="absolute -top-6 start-8 md:start-12">
                <div class="w-12 h-12 bg-[#EBC934] rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
              </div>
              
              <div class="pt-4">
                <p class="text-xl md:text-2xl text-gray-300 leading-relaxed md:leading-loose text-justify font-medium">
                  {{ 'ABOUT_SAMA.DESC' | translate }}
                </p>
              </div>
              
              <div class="mt-8 flex items-center justify-center">
                <div class="h-1 w-24 bg-gradient-to-r from-transparent via-[#EBC934] to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Services/Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <!-- Feature 1 -->
            <div class="bg-[#2A2A2A] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-[#EBC934]/10">
              <div class="w-14 h-14 bg-[#EBC934]/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-[#EBC934]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ 'ABOUT_SAMA.FEATURES.CONTRACTING.TITLE' | translate }}</h3>
              <p class="text-gray-400">{{ 'ABOUT_SAMA.FEATURES.CONTRACTING.DESC' | translate }}</p>
            </div>

            <!-- Feature 2 -->
            <div class="bg-[#2A2A2A] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-[#EBC934]/10">
              <div class="w-14 h-14 bg-[#EBC934]/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-[#EBC934]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ 'ABOUT_SAMA.FEATURES.SAFETY.TITLE' | translate }}</h3>
              <p class="text-gray-400">{{ 'ABOUT_SAMA.FEATURES.SAFETY.DESC' | translate }}</p>
            </div>

            <!-- Feature 3 -->
            <div class="bg-[#2A2A2A] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-[#EBC934]/10">
              <div class="w-14 h-14 bg-[#EBC934]/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-[#EBC934]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ 'ABOUT_SAMA.FEATURES.MAINTENANCE.TITLE' | translate }}</h3>
              <p class="text-gray-400">{{ 'ABOUT_SAMA.FEATURES.MAINTENANCE.DESC' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutSamaComponent implements OnInit {
  private translationService = inject(TranslationService);

  ngOnInit() {
    this.translationService.loadModule('AboutSama');
  }
}
