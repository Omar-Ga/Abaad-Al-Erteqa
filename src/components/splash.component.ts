
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-splash',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    template: `
    @if (showSplash()) {
      <div 
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a] transition-transform duration-[1.5s] ease-[cubic-bezier(0.87,0,0.13,1)]"
        [class.-translate-y-full]="hiding()"
      >
        <div 
          class="flex flex-col items-center justify-center w-full transition-opacity duration-700 delay-100"
          [class.opacity-0]="hiding()"
        >
          <!-- Logo -->
          <img 
            ngSrc="assets/Logos/logo.png" 
            alt="Logo" 
            width="128" 
            height="128" 
            priority
            class="w-24 md:w-32 h-auto object-contain drop-shadow-2xl animate-logo-reveal mb-6 mx-auto" 
          />
          
          <!-- Text Content -->
          <div class="flex flex-col items-center gap-2 mb-10 text-center w-full">
              <h1 class="text-white text-xl md:text-2xl font-bold tracking-wide animate-text-reveal opacity-0 w-full" style="animation-delay: 0.3s">
                  ABAAD & SAMA
              </h1>
              <p class="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.3em] animate-text-reveal opacity-0 w-full" style="animation-delay: 0.5s">
                  Engineering & Safety Solutions
              </p>
          </div>

          <!-- Progress Bar -->
          <div class="h-[2px] w-48 bg-white/10 rounded-full overflow-hidden relative mx-auto">
              <div class="absolute h-full w-full bg-[#4A3728] origin-left animate-progress-line shadow-[0_0_10px_rgba(74,55,40,0.5)]"></div>
          </div>
        </div>
      </div>
    }
  `,
    styles: [`
    :host {
      display: block;
    }
    
    .animate-logo-reveal {
      animation: logoReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    .animate-text-reveal {
      animation: textReveal 1s ease-out forwards;
    }

    .animate-progress-line {
      animation: progressLine 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.6s;
      transform: scaleX(0);
    }

    @keyframes logoReveal {
      0% {
        opacity: 0;
        transform: scale(0.95) translateY(20px);
        filter: blur(10px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
        filter: blur(0);
      }
    }

    @keyframes textReveal {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes progressLine {
      0% { transform: scaleX(0); }
      50% { transform: scaleX(0.7); }
      100% { transform: scaleX(1); }
    }
  `]
})
export class SplashComponent implements OnInit {
    showSplash = signal(true);
    hiding = signal(false);

    ngOnInit() {
        // Timeline sequence
        setTimeout(() => {
            this.hiding.set(true);

            // Remove from DOM after transition completes
            setTimeout(() => {
                this.showSplash.set(false);
            }, 1500); // Matches duration-[1.5s]
        }, 2800); // Wait time before exit
    }
}
