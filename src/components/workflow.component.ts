
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-[#FDFBF7] border-t border-b border-[#8B5E3C]/10">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-[#1A1A1A]">The Integrated Workflow</h2>
          <p class="text-[#4A4A4A] mt-2">From concept to completion.</p>
        </div>

        <div class="relative">
          <!-- Connecting Line (Desktop) -->
          <div class="hidden lg:block absolute top-8 left-0 w-full h-px bg-[#8B5E3C]/20 z-0"></div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            
            <!-- Step 1 -->
            <div class="bg-[#FDFBF7] pt-0 lg:pt-8 relative group">
              <div class="w-16 h-16 rounded-full bg-white border border-[#8B5E3C]/20 flex items-center justify-center text-[#8B5E3C] shadow-sm mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span class="font-bold text-lg">01</span>
              </div>
              <h3 class="text-xl font-bold text-[#1A1A1A] mb-2 text-center lg:text-left">Surveying & Planning</h3>
              <p class="text-sm text-[#8B5E3C] font-semibold mb-2 text-center lg:text-left">Abaad</p>
              <p class="text-[#4A4A4A] text-sm leading-relaxed text-center lg:text-left">
                Topographical surveys and real estate unit sorting (Farz) to establish the ground truth.
              </p>
            </div>

            <!-- Step 2 -->
             <div class="bg-[#FDFBF7] pt-0 lg:pt-8 relative group">
              <div class="w-16 h-16 rounded-full bg-white border border-[#8B5E3C]/20 flex items-center justify-center text-[#8B5E3C] shadow-sm mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span class="font-bold text-lg">02</span>
              </div>
              <h3 class="text-xl font-bold text-[#1A1A1A] mb-2 text-center lg:text-left">Design & Engineering</h3>
              <p class="text-sm text-[#8B5E3C] font-semibold mb-2 text-center lg:text-left">Abaad</p>
              <p class="text-[#4A4A4A] text-sm leading-relaxed text-center lg:text-left">
                Architectural, structural, and MEP design for robust and efficient facilities.
              </p>
            </div>

            <!-- Step 3 -->
             <div class="bg-[#FDFBF7] pt-0 lg:pt-8 relative group">
              <div class="w-16 h-16 rounded-full bg-white border border-[#EBC934]/30 flex items-center justify-center text-[#EBC934] shadow-sm mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span class="font-bold text-lg">03</span>
              </div>
              <h3 class="text-xl font-bold text-[#1A1A1A] mb-2 text-center lg:text-left">Execution & Contracting</h3>
              <p class="text-sm text-[#EBC934] font-semibold mb-2 text-center lg:text-left">Sama</p>
              <p class="text-[#4A4A4A] text-sm leading-relaxed text-center lg:text-left">
                General contracting, sanitation works, and infrastructure implementation.
              </p>
            </div>

            <!-- Step 4 -->
             <div class="bg-[#FDFBF7] pt-0 lg:pt-8 relative group">
              <div class="w-16 h-16 rounded-full bg-white border border-[#EBC934]/30 flex items-center justify-center text-[#EBC934] shadow-sm mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span class="font-bold text-lg">04</span>
              </div>
              <h3 class="text-xl font-bold text-[#1A1A1A] mb-2 text-center lg:text-left">Operation & Maintenance</h3>
              <p class="text-sm text-[#EBC934] font-semibold mb-2 text-center lg:text-left">Sama</p>
              <p class="text-[#4A4A4A] text-sm leading-relaxed text-center lg:text-left">
                Facility management, building restoration, and high-end finishing.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowComponent {}
