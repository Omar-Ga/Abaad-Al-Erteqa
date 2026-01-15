import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about-abaad',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="min-h-screen py-32 bg-[#EFE7DD] overflow-hidden relative" dir="auto">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-12deg] origin-top opacity-100 -mr-20 z-0"></div>
      
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-12">
            <div class="inline-block">
              <span class="text-sm font-semibold text-[#4A3728]/60 uppercase tracking-widest">
                {{ 'HOME.NAV.ABOUT_US' | translate }}
              </span>
            </div>
            <h1 class="mt-4 text-4xl font-extrabold text-[#4A3728] sm:text-5xl lg:text-6xl">
              {{ 'ABOUT_ABAAD.TITLE' | translate }}
            </h1>
            <div class="mt-6 flex items-center justify-center gap-4">
              <div class="h-[2px] w-16 bg-[#4A3728]/30"></div>
              <div class="w-3 h-3 bg-[#4A3728] rotate-45"></div>
              <div class="h-[2px] w-16 bg-[#4A3728]/30"></div>
            </div>
          </div>

          <!-- Main Content Card -->
          <div class="relative mb-12">
            <div class="absolute -inset-4 bg-[#4A3728]/5 rounded-3xl transform -rotate-1"></div>
            <div class="absolute -inset-4 bg-[#4A3728]/5 rounded-3xl transform rotate-1"></div>
            
            <div class="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
              <!-- Logo/Icon -->
              <div class="absolute -top-6 start-8 md:start-12">
                <div class="w-12 h-12 bg-[#4A3728] rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
              
              <div class="pt-4">
                <p class="text-xl md:text-2xl text-gray-700 leading-relaxed md:leading-loose text-justify font-medium">
                  {{ 'ABOUT_ABAAD.DESC' | translate }}
                </p>
              </div>
              
              <div class="mt-8 flex items-center justify-center">
                <div class="h-1 w-24 bg-gradient-to-r from-transparent via-[#4A3728] to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Services/Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <!-- Feature 1 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="w-14 h-14 bg-[#4A3728]/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ 'ABOUT_ABAAD.FEATURES.DESIGN.TITLE' | translate }}</h3>
              <p class="text-gray-600">{{ 'ABOUT_ABAAD.FEATURES.DESIGN.DESC' | translate }}</p>
            </div>

            <!-- Feature 2 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="w-14 h-14 bg-[#4A3728]/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ 'ABOUT_ABAAD.FEATURES.SUPERVISION.TITLE' | translate }}</h3>
              <p class="text-gray-600">{{ 'ABOUT_ABAAD.FEATURES.SUPERVISION.DESC' | translate }}</p>
            </div>

            <!-- Feature 3 -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="w-14 h-14 bg-[#4A3728]/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ 'ABOUT_ABAAD.FEATURES.SURVEY.TITLE' | translate }}</h3>
              <p class="text-gray-600">{{ 'ABOUT_ABAAD.FEATURES.SURVEY.DESC' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutAbaadComponent implements OnInit {
  private translationService = inject(TranslationService);

  ngOnInit() {
    this.translationService.loadModule('AboutAbaad');
  }
}
