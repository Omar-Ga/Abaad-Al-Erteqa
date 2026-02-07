import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-clients-marquee',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ScrollRevealDirective],
  template: `
    <section class="py-16 bg-white overflow-hidden" dir="ltr">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div 
          appScrollReveal="fade-up"
          class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#4A3728]">
            {{ 'HOME.CLIENTS.TITLE' | translate }}
          </h2>
          <div class="mt-4 flex items-center justify-center gap-4">
            <div class="h-[2px] w-12 bg-[#4A3728]/30"></div>
            <div class="w-2 h-2 bg-[#4A3728] rotate-45"></div>
            <div class="h-[2px] w-12 bg-[#4A3728]/30"></div>
          </div>
        </div>
      </div>

      <!-- Marquee Container -->
      <div 
        appScrollReveal="fade-in" 
        delay="300ms"
        class="marquee-wrapper">
        <div class="marquee-track">
          @for (logo of logos; track $index) {
            <div class="marquee-item">
              <img [src]="'assets/images/3omla2/' + logo" [alt]="'Client Logo'" 
                   class="h-16 md:h-20 w-auto object-contain" />
            </div>
          }
          @for (logo of logos; track $index) {
            <div class="marquee-item">
              <img [src]="'assets/images/3omla2/' + logo" [alt]="'Client Logo'" 
                   class="h-16 md:h-20 w-auto object-contain" />
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .marquee-wrapper {
      width: 100%;
      overflow: hidden;
      mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    }
    
    .marquee-track {
      display: flex;
      width: fit-content;
      animation: scroll 40s linear infinite;
    }
    
    .marquee-track:hover {
      animation-play-state: paused;
    }
    
    .marquee-item {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.5rem;
      margin: 0 1rem;
      background: #F9F8F6;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsMarqueeComponent {
  logos = [
    '3ter.webp',
    '7ogag.webp',
    'abosrhd.webp',
    'balad.webp',
    'fkeeh.webp',
    'gaz.webp',
    'gbl3omr.webp',
    'jamal.webp',
    'koraa.webp',
    'mac.webp',
    'mekkah.webp',
    'mgmo3a.webp',
    'mo2ssa.webp',
    'mo7fza.webp',
    'mobily.webp',
    'nakor.webp',
    'rag7y.webp',
    'rasyat.webp',
    'riyad.webp',
    's3edan.webp',
    'se77a.webp',
    'somou.webp',
    'wa7a.webp'
  ];
}
