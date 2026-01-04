
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="py-24 bg-[#F9F8F6] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <!-- Text Content (Left) -->
        <div class="lg:w-1/3 relative z-10">
          <span class="text-[#8B5E3C] font-semibold tracking-wider text-sm uppercase mb-2 block">Our Mission</span>
          <h3 class="text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">One Vision, <br/><span class="text-[#8B5E3C]">Two Dimensions</span>.</h3>
          
          <div class="prose text-[#4A4A4A] leading-relaxed mb-6">
            <p class="mb-4">
              We combine scientific precision with on-site expertise. 
            </p>
            <p class="mb-4">
              <strong class="text-[#1A1A1A]">Abaad Al-Erteqaa</strong> provides the architectural roadmap through comprehensive design and supervision.
            </p>
            <p>
              <strong class="text-[#1A1A1A]">Sama Al-Mamaria</strong> transforms these blueprints into reality through expert general contracting, restoration, and finishing works.
            </p>
          </div>

          <a href="#" class="inline-flex items-center text-[#1A1A1A] font-semibold hover:text-[#8B5E3C] transition-colors group mt-4">
            Learn More
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <!-- Visuals (Right - Stacked) -->
        <div class="lg:w-2/3 relative h-[500px] w-full mt-10 lg:mt-0">
            <!-- Back Image (Architectural Sketch - Faded) -->
            <div class="absolute top-0 right-0 w-3/4 h-3/4 grayscale opacity-80 rounded-md overflow-hidden shadow-sm">
                 <img 
                    ngSrc="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" 
                    fill 
                    class="object-cover" 
                    alt="Blueprint"
                >
            </div>
            
            <!-- Front Image (Inspector - Sharp & Color) -->
            <div class="absolute bottom-0 left-0 lg:left-12 w-3/5 h-3/5 shadow-2xl rounded-md overflow-hidden border-4 border-[#F9F8F6]">
                 <img 
                    ngSrc="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop" 
                    fill 
                    class="object-cover" 
                    alt="Safety Inspector"
                >
            </div>

            <!-- Decorative Box -->
            <div class="absolute bottom-10 right-10 w-24 h-24 bg-[#8B5E3C]/10 -z-10 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
