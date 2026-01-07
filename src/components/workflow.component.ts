
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
          
          @for (step of steps; track step.id) {
            <div class="relative group" [ngClass]="step.margin">
               <div 
                 class="absolute -left-4 -top-4 text-9xl font-bold z-0 select-none transition-colors"
                 [ngClass]="step.theme === 'abaad' ? 'text-[#4A3728]/35 group-hover:text-[#4A3728]/55' : 'text-[#EBC934]/35 group-hover:text-[#EBC934]/55'"
               >{{ step.id }}</div>
               <div 
                 class="relative z-10 pt-8 border-t-2 transition-colors duration-500"
                 [ngClass]="step.theme === 'abaad' ? 'border-[#4A3728]/20 group-hover:border-[#4A3728]' : 'border-[#EBC934]/30 group-hover:border-[#EBC934]'"
               >
                 <h3 class="text-2xl font-bold text-[#1A1A1A] mb-2">{{ 'HOME.WORKFLOW.STEPS.' + step.key + '.TITLE' | translate }}</h3>
                 <span 
                   class="inline-block px-2 py-1 text-xs font-bold rounded mb-4"
                   [ngClass]="step.theme === 'abaad' ? 'bg-[#4A3728]/10 text-[#4A3728]' : 'bg-[#EBC934]/10 text-[#B89C28]'"
                 >{{ step.tag | translate }}</span>
                 <p class="text-[#4A4A4A] leading-relaxed">
                   {{ 'HOME.WORKFLOW.STEPS.' + step.key + '.DESC' | translate }}
                 </p>
               </div>
            </div>
          }

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowComponent {
  steps = [
    { id: '01', key: 'STEP1', tag: 'HOME.ABAAD', margin: 'mt-0', theme: 'abaad' },
    { id: '02', key: 'STEP2', tag: 'HOME.ABAAD', margin: 'mt-0 lg:mt-12', theme: 'abaad' },
    { id: '03', key: 'STEP3', tag: 'HOME.SAMA', margin: 'mt-0 lg:mt-24', theme: 'sama' },
    { id: '04', key: 'STEP4', tag: 'HOME.SAMA', margin: 'mt-0 lg:mt-36', theme: 'sama' },
  ];
}
