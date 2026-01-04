
import { Component, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="py-32 bg-white relative overflow-hidden">
      <!-- Floating Accent Shapes -->
      <div class="absolute top-20 left-10 w-64 h-64 bg-[#4A3728]/5 rounded-full blur-3xl -z-0"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#EBC934]/5 rounded-full blur-3xl -z-0"></div>
      
      <!-- Angled Divider (Top Right) -->
      <div class="absolute top-0 right-0 w-1/3 h-4 bg-[#4A3728] skew-x-[-45deg] origin-top-right z-10 opacity-20"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex flex-col items-center mb-20">
          <h2 class="text-4xl font-bold text-[#1A1A1A] text-center">{{ 'HOME.SERVICES.HEADER' | translate }}</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#4A3728] to-[#EBC934] mt-6"></div>
          <p class="text-center text-[#4A4A4A] mt-4 max-w-2xl" [innerHTML]="'HOME.SERVICES.SUBHEADER' | translate">
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            @for (service of services; track service.id) {
                <div #serviceCard class="group bg-[#F9F8F6] p-8 pb-12 rounded-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 [&.in-view]:-translate-y-2 relative overflow-hidden border-t-4 border-transparent"
                     [class.hover:border-[#4A3728]]="service.type === 'abaad'"
                     [class.group-[.in-view]:border-[#4A3728]]="service.type === 'abaad'"
                     [class.hover:border-[#EBC934]]="service.type === 'sama'"
                     [class.group-[.in-view]:border-[#EBC934]]="service.type === 'sama'"
                >
                    <!-- Background Decoration -->
                    <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 group-[.in-view]:opacity-10 transition-all duration-500 ease-out scale-50 group-hover:scale-100 group-[.in-view]:scale-100"
                         [class.bg-[#4A3728]]="service.type === 'abaad'"
                         [class.bg-[#EBC934]]="service.type === 'sama'"
                    ></div>
                    
                    <!-- Icon Area -->
                    <div class="mb-8 h-12 w-12 text-[#4A4A4A] group-hover:scale-110 group-[.in-view]:scale-110 transition-transform duration-500 relative z-10"
                         [class.group-hover:text-[#4A3728]]="service.type === 'abaad'"
                         [class.group-[.in-view]:text-[#4A3728]]="service.type === 'abaad'"
                         [class.group-hover:text-[#EBC934]]="service.type === 'sama'"
                         [class.group-[.in-view]:text-[#EBC934]]="service.type === 'sama'"
                         [innerHTML]="service.iconSvg"
                    ></div>
                    
                    <h3 class="text-xl font-bold text-[#1A1A1A] mb-4 relative z-10">{{ service.title | translate }}</h3>
                    <p class="text-[#4A4A4A] text-sm leading-relaxed opacity-80 min-h-[60px] relative z-10" [innerHTML]="service.desc | translate">
                    </p>
                    
                    <div class="absolute bottom-6 left-8 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 group-[.in-view]:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-[.in-view]:translate-y-0"
                         [class.text-[#4A3728]]="service.type === 'abaad'"
                         [class.text-[#B89C28]]="service.type === 'sama'"
                    >
                        {{ (service.type === 'abaad' ? 'HOME.ABAAD' : 'HOME.SAMA') | translate }}
                    </div>
                </div>
            }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;

  services = [
    {
      id: 1,
      type: 'abaad',
      title: 'HOME.SERVICES.ITEMS.ABAAD_DESIGN.TITLE',
      desc: 'HOME.SERVICES.ITEMS.ABAAD_DESIGN.DESC',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>`
    },
    {
      id: 2,
      type: 'abaad',
      title: 'HOME.SERVICES.ITEMS.ABAAD_SURVEY.TITLE',
      desc: 'HOME.SERVICES.ITEMS.ABAAD_SURVEY.DESC',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>`
    },
    {
      id: 3,
      type: 'sama',
      title: 'HOME.SERVICES.ITEMS.SAMA_CONTRACTING.TITLE',
      desc: 'HOME.SERVICES.ITEMS.SAMA_CONTRACTING.DESC',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M6 3v2.25M18 3v2.25M6 15v6.375m12-6.375v6.375m-12-3.375h12m-9-6.375h6m-9-6.375h6" /></svg>`
    },
    {
      id: 4,
      type: 'sama',
      title: 'HOME.SERVICES.ITEMS.SAMA_RESTORATION.TITLE',
      desc: 'HOME.SERVICES.ITEMS.SAMA_RESTORATION.DESC',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.703.127 1.543.9 2.456 3.022 1.204 4.038m-2.907-4.165c.81-1.182 1.5-3.133.454-4.187-1.614-1.612-4.25-1.558-5.69 0-.646.698-2.654 3.535-3.536 4.606.398.397.798.815 1.15 1.25l2.05-1.92 2.05 1.92.51-.483z" /></svg>`
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initObserver() {
    this.observer = new IntersectionObserver((entries) => {
      if (window.innerWidth >= 768) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.2 // Trigger earlier for list (20%)
    });

    this.serviceCards.forEach(card => this.observer?.observe(card.nativeElement));
  }
}
