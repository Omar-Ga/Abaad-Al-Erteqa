
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gateway',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="relative z-30 px-6 -mt-20 pb-16">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Card A: Abaad Al-Erteqaa (Blue/Technical Tone) -->
        <div class="group relative h-[450px] overflow-hidden rounded-md shadow-2xl cursor-pointer">
          <!-- Background Image -->
          <div class="absolute inset-0 w-full h-full">
            <img 
                ngSrc="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                fill 
                class="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                alt="Architecture Office"
            >
          </div>
          <!-- Visual Tone Overlay: Technical Blue -->
          <div class="absolute inset-0 bg-slate-900/60 mix-blend-hard-light group-hover:bg-[#1E3A8A]/60 transition-colors duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <!-- Content -->
          <div class="absolute inset-0 flex flex-col justify-end p-10">
            <!-- Accent Line -->
            <div class="w-12 h-1 bg-white mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-400"></div>
            
            <h2 class="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Engineering Consultation</h2>
            <p class="text-gray-300 font-medium mb-1">Abaad Al-Erteqaa</p>
            
            <p class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-sm">
                Design, Supervision & Surveying. We draft the blueprints of tomorrow with scientific precision.
            </p>
            <div class="mt-6 flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <span>Explore Design</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </div>
        </div>

        <!-- Card B: Sama Al-Mamaria (Warm Yellow/Construction Tone) -->
        <div class="group relative h-[450px] overflow-hidden rounded-md shadow-2xl cursor-pointer">
           <!-- Background Image -->
           <div class="absolute inset-0 w-full h-full">
            <img 
                ngSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" 
                fill 
                class="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                alt="Safety Construction"
            >
          </div>
          <!-- Visual Tone Overlay: Warm Bronze/Yellow -->
          <div class="absolute inset-0 bg-[#8B5E3C]/60 mix-blend-multiply group-hover:bg-[#EBC934]/60 transition-colors duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <!-- Content -->
           <div class="absolute inset-0 flex flex-col justify-end p-10">
            <!-- Accent Line -->
            <div class="w-12 h-1 bg-white mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-[#EBC934]"></div>
            
            <h2 class="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Sama Contracting & Safety</h2>
             <p class="text-gray-300 font-medium mb-1">Sama Al-Mamaria</p>
            
            <p class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-sm">
                Construction, Finishing & Maintenance. Executing visions with rigorous safety standards.
            </p>
             <div class="mt-6 flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <span>View Contracting</span>
                <svg class="w-4 h-4 ml-2 text-[#EBC934]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GatewayComponent {}
