
import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="relative h-screen min-h-[900px] w-full overflow-hidden flex items-center justify-center pb-40">
      
      <!-- Background Slideshow -->
      <div class="absolute inset-0 z-0 bg-gray-900">
        @for (img of images; track img; let i = $index) {
          <div 
            class="absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out"
            [class.opacity-100]="i === activeIndex()"
            [class.opacity-0]="i !== activeIndex()"
          >
             <img [ngSrc]="img" fill priority alt="Hero Background" class="object-cover w-full h-full">
          </div>
        }
      </div>

      <!-- Bronze Overlay (Unification Layer) -->
      <div class="absolute inset-0 z-10 bg-[#8B5E3C] opacity-35 mix-blend-multiply pointer-events-none"></div>
      
      <!-- Darker Gradient for text readability -->
      <div class="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>

      <!-- Bottom Gradient Blend -->
      <div class="absolute bottom-0 left-0 w-full h-64 z-20 bg-gradient-to-b from-transparent to-[#F9F8F6]"></div>

      <!-- Content -->
      <div class="relative z-30 text-center max-w-5xl px-6 animate-fade-in-up mt-10">
        <div class="inline-block mb-4 px-3 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium tracking-widest text-white uppercase">
          Abaad & Sama
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
          Precision in Design. <br/> Quality in Execution.
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Since 2000. Upgrading the urban landscape through precise design and perfected execution.
        </p>
        
        <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
             <button class="px-8 py-3 bg-[#8B5E3C] text-white font-semibold rounded-sm hover:bg-[#704b30] transition-colors shadow-lg hover:shadow-xl">
                Our Services
             </button>
             <button class="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-sm hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-lg">
                View Portfolio
             </button>
        </div>
      </div>

    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  images = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Skyscraper
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop', // Safety Blueprint
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Construction Site
  ];

  activeIndex = signal(0);
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.images.length);
    }, 5000); // 5 seconds rotation
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
