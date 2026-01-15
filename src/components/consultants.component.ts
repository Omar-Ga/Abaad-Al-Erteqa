import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-consultants',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="min-h-screen py-32 bg-[#EFE7DD] overflow-hidden relative" dir="auto">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-12deg] origin-top opacity-100 -mr-20 z-0"></div>
      
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <!-- Who We Are Section -->
        <div class="max-w-5xl mx-auto">
          <!-- Title with decorative elements -->
          <div class="text-center mb-12">
            <div class="inline-block">
              <span class="text-sm font-semibold text-[#4A3728]/60 uppercase tracking-widest">
                {{ 'HOME.NAV.CONSULTANTS' | translate }}
              </span>
            </div>
            <h1 class="mt-4 text-4xl font-extrabold text-[#4A3728] sm:text-5xl lg:text-6xl">
              {{ 'CONSULTANTS.WHO_WE_ARE.TITLE' | translate }}
            </h1>
            <div class="mt-6 flex items-center justify-center gap-4">
              <div class="h-[2px] w-16 bg-[#4A3728]/30"></div>
              <div class="w-3 h-3 bg-[#4A3728] rotate-45"></div>
              <div class="h-[2px] w-16 bg-[#4A3728]/30"></div>
            </div>
          </div>

          <!-- Description Card -->
          <div class="relative">
            <!-- Decorative background -->
            <div class="absolute -inset-4 bg-[#4A3728]/5 rounded-3xl transform -rotate-1"></div>
            <div class="absolute -inset-4 bg-[#4A3728]/5 rounded-3xl transform rotate-1"></div>
            
            <!-- Content Card -->
            <div class="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
              <!-- Quote Icon -->
              <div class="absolute -top-6 start-8 md:start-12">
                <div class="w-12 h-12 bg-[#4A3728] rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
              
              <!-- Text Content -->
              <div class="pt-4">
                <p class="text-xl md:text-2xl lg:text-2xl text-gray-700 leading-relaxed md:leading-loose text-justify font-medium">
                  {{ 'CONSULTANTS.WHO_WE_ARE.DESC' | translate }}
                </p>
              </div>
              
              <!-- Bottom decorative line -->
              <div class="mt-8 flex items-center justify-center">
                <div class="h-1 w-24 bg-gradient-to-r from-transparent via-[#4A3728] to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Decorative Icons Row -->
          <div class="mt-16 flex justify-center gap-8 md:gap-16">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 bg-[#4A3728]/10 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-7 h-7 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 bg-[#4A3728]/10 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-7 h-7 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 bg-[#4A3728]/10 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-7 h-7 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ConsultantsComponent implements OnInit {
  private translationService = inject(TranslationService);

  ngOnInit() {
    this.translationService.loadModule('Consultants');
  }
}
