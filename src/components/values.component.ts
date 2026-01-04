
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <!-- Value 1 -->
          <div class="flex flex-col items-start group">
            <div class="mb-4 text-[#4A3728] group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 12l-2-2"/><path d="M12 16l-2-2"/><path d="M12 8l4 4"/></svg>
            </div>
            <h4 class="text-lg font-bold text-[#1A1A1A] mb-2">{{ 'HOME.VALUES.VAL1.TITLE' | translate }}</h4>
            <p class="text-sm text-[#4A4A4A] leading-relaxed">
              {{ 'HOME.VALUES.VAL1.DESC' | translate }}
            </p>
          </div>

          <!-- Value 2 -->
          <div class="flex flex-col items-start group">
            <div class="mb-4 text-[#4A3728] group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h4 class="text-lg font-bold text-[#1A1A1A] mb-2">{{ 'HOME.VALUES.VAL2.TITLE' | translate }}</h4>
            <p class="text-sm text-[#4A4A4A] leading-relaxed">
              {{ 'HOME.VALUES.VAL2.DESC' | translate }}
            </p>
          </div>

          <!-- Value 3 -->
          <div class="flex flex-col items-start group">
             <div class="mb-4 text-[#4A3728] group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" x2="2" y1="20" y2="20"/></svg>
            </div>
            <h4 class="text-lg font-bold text-[#1A1A1A] mb-2">{{ 'HOME.VALUES.VAL3.TITLE' | translate }}</h4>
            <p class="text-sm text-[#4A4A4A] leading-relaxed">
              {{ 'HOME.VALUES.VAL3.DESC' | translate }}
            </p>
          </div>

          <!-- Value 4 -->
          <div class="flex flex-col items-start group">
             <div class="mb-4 text-[#4A3728] group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h4 class="text-lg font-bold text-[#1A1A1A] mb-2">{{ 'HOME.VALUES.VAL4.TITLE' | translate }}</h4>
            <p class="text-sm text-[#4A4A4A] leading-relaxed">
              {{ 'HOME.VALUES.VAL4.DESC' | translate }}
            </p>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuesComponent { }
