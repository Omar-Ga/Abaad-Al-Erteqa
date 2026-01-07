
import { Component, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, PencilRuler, Map, Hammer, Trees } from 'lucide-angular';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslatePipe, LucideAngularModule],
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
                    >
                        <lucide-icon [name]="service.iconName" [size]="48" [strokeWidth]="1.5"></lucide-icon>
                    </div>
                    
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
      iconName: 'pencil-ruler'
    },
    {
      id: 2,
      type: 'abaad',
      title: 'HOME.SERVICES.ITEMS.ABAAD_SURVEY.TITLE',
      desc: 'HOME.SERVICES.ITEMS.ABAAD_SURVEY.DESC',
      iconName: 'map'
    },
    {
      id: 3,
      type: 'sama',
      title: 'HOME.SERVICES.ITEMS.SAMA_CONTRACTING.TITLE',
      desc: 'HOME.SERVICES.ITEMS.SAMA_CONTRACTING.DESC',
      iconName: 'hammer'
    },
    {
      id: 4,
      type: 'sama',
      title: 'HOME.SERVICES.ITEMS.SAMA_RESTORATION.TITLE',
      desc: 'HOME.SERVICES.ITEMS.SAMA_RESTORATION.DESC',
      iconName: 'trees'
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
