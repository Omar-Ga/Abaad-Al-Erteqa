
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, TranslatePipe, NgOptimizedImage],
  template: `
    <section class="relative py-32 overflow-hidden bg-[#FDFBF7]">
      <!-- Background Texture -->
      <div class="absolute inset-0 z-0 opacity-60">
        <img 
            ngSrc="assets/images/workflow_background.png" 
            fill 
            class="object-cover w-full h-full mix-blend-multiply"
            alt="Blueprint Texture"
        >
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        <div class="flex flex-col md:flex-row items-end justify-between mb-24">
           <div class="max-w-xl">
             <h2 class="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">{{ 'HOME.WORKFLOW.HEADER' | translate }}</h2>
             <p class="text-[#4A4A4A] text-lg">{{ 'HOME.WORKFLOW.SUBHEADER' | translate }}</p>
           </div>
           <div class="hidden md:block w-32 h-1 bg-[#4A3728]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Step 1 -->
          <div class="relative group mt-0">
             <div class="absolute -left-4 -top-4 text-9xl font-bold text-[#4A3728]/5 z-0 select-none group-hover:text-[#4A3728]/10 transition-colors">01</div>
             <div class="relative z-10 pt-8 border-t-2 border-[#4A3728]/20 group-hover:border-[#4A3728] transition-colors duration-500">
               <h3 class="text-2xl font-bold text-[#1A1A1A] mb-2">{{ 'HOME.WORKFLOW.STEPS.STEP1.TITLE' | translate }}</h3>
               <span class="inline-block px-2 py-1 bg-[#4A3728]/10 text-[#4A3728] text-xs font-bold rounded mb-4">{{ 'HOME.ABAAD' | translate }}</span>
               <p class="text-[#4A4A4A] leading-relaxed">
                 {{ 'HOME.WORKFLOW.STEPS.STEP1.DESC' | translate }}
               </p>
             </div>
          </div>

          <!-- Step 2 (Staggered) -->
          <div class="relative group mt-0 lg:mt-12">
             <div class="absolute -left-4 -top-4 text-9xl font-bold text-[#4A3728]/5 z-0 select-none group-hover:text-[#4A3728]/10 transition-colors">02</div>
             <div class="relative z-10 pt-8 border-t-2 border-[#4A3728]/20 group-hover:border-[#4A3728] transition-colors duration-500">
               <h3 class="text-2xl font-bold text-[#1A1A1A] mb-2">{{ 'HOME.WORKFLOW.STEPS.STEP2.TITLE' | translate }}</h3>
               <span class="inline-block px-2 py-1 bg-[#4A3728]/10 text-[#4A3728] text-xs font-bold rounded mb-4">{{ 'HOME.ABAAD' | translate }}</span>
               <p class="text-[#4A4A4A] leading-relaxed">
                 {{ 'HOME.WORKFLOW.STEPS.STEP2.DESC' | translate }}
               </p>
             </div>
          </div>

          <!-- Step 3 (Staggered More) -->
          <div class="relative group mt-0 lg:mt-24">
             <div class="absolute -left-4 -top-4 text-9xl font-bold text-[#EBC934]/5 z-0 select-none group-hover:text-[#EBC934]/10 transition-colors">03</div>
             <div class="relative z-10 pt-8 border-t-2 border-[#EBC934]/30 group-hover:border-[#EBC934] transition-colors duration-500">
               <h3 class="text-2xl font-bold text-[#1A1A1A] mb-2">{{ 'HOME.WORKFLOW.STEPS.STEP3.TITLE' | translate }}</h3>
               <span class="inline-block px-2 py-1 bg-[#EBC934]/10 text-[#B89C28] text-xs font-bold rounded mb-4">{{ 'HOME.SAMA' | translate }}</span>
               <p class="text-[#4A4A4A] leading-relaxed">
                 {{ 'HOME.WORKFLOW.STEPS.STEP3.DESC' | translate }}
               </p>
             </div>
          </div>

          <!-- Step 4 (Staggered Most) -->
          <div class="relative group mt-0 lg:mt-36">
             <div class="absolute -left-4 -top-4 text-9xl font-bold text-[#EBC934]/5 z-0 select-none group-hover:text-[#EBC934]/10 transition-colors">04</div>
             <div class="relative z-10 pt-8 border-t-2 border-[#EBC934]/30 group-hover:border-[#EBC934] transition-colors duration-500">
               <h3 class="text-2xl font-bold text-[#1A1A1A] mb-2">{{ 'HOME.WORKFLOW.STEPS.STEP4.TITLE' | translate }}</h3>
               <span class="inline-block px-2 py-1 bg-[#EBC934]/10 text-[#B89C28] text-xs font-bold rounded mb-4">{{ 'HOME.SAMA' | translate }}</span>
               <p class="text-[#4A4A4A] leading-relaxed">
                 {{ 'HOME.WORKFLOW.STEPS.STEP4.DESC' | translate }}
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowComponent { }
