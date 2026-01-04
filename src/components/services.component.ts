
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-[#1A1A1A]">Our Core Capabilities</h2>
          <div class="w-16 h-1 bg-[#8B5E3C] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (service of services; track service.id) {
                <div class="group bg-[#F9F8F6] p-8 rounded-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border-b-2 border-transparent"
                     [class.hover:border-[#8B5E3C]]="service.type === 'abaad'"
                     [class.hover:border-[#EBC934]]="service.type === 'sama'"
                >
                    <!-- Background Decoration -->
                    <div class="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 ease-in-out opacity-10"
                         [class.bg-[#8B5E3C]]="service.type === 'abaad'"
                         [class.bg-[#EBC934]]="service.type === 'sama'"
                    ></div>
                    
                    <!-- Icon Area -->
                    <div class="mb-6 h-12 w-12 text-[#4A4A4A] group-hover:scale-110 transition-transform duration-300"
                         [class.group-hover:text-[#8B5E3C]]="service.type === 'abaad'"
                         [class.group-hover:text-[#EBC934]]="service.type === 'sama'"
                         [innerHTML]="service.iconSvg"
                    ></div>
                    
                    <h3 class="text-xl font-bold text-[#1A1A1A] mb-3">{{ service.title }}</h3>
                    <p class="text-[#4A4A4A] text-sm leading-relaxed opacity-80 min-h-[40px]" [innerHTML]="service.desc">
                    </p>
                    
                    <div class="mt-6 flex items-center text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                         [class.text-[#8B5E3C]]="service.type === 'abaad'"
                         [class.text-[#EBC934]]="service.type === 'sama'"
                    >
                        {{ service.type === 'abaad' ? 'Abaad' : 'Sama' }}
                    </div>
                </div>
            }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = [
    { 
      id: 1, 
      type: 'abaad',
      title: 'Architectural & MEP Design', 
      desc: 'Comprehensive structural, electrical, and mechanical planning for complex facilities.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>`
    },
    { 
      id: 2, 
      type: 'abaad',
      title: 'Surveying & Unit Sorting', 
      desc: 'Precision land surveying and <strong>Real Estate Unit Sorting (Farz)</strong> for property development.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>`
    },
    { 
      id: 3, 
      type: 'sama',
      title: 'General Contracting', 
      desc: 'Execution of public and private buildings, including water and sanitation <strong>infrastructure</strong>.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M6 3v2.25M18 3v2.25M6 15v6.375m12-6.375v6.375m-12-3.375h12m-9-6.375h6m-9-6.375h6" /></svg>`
    },
    { 
      id: 4, 
      type: 'sama',
      title: 'Restoration & Landscaping', 
      desc: 'Building restoration, interior finishing, and the development of gardens and parks.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.703.127 1.543.9 2.456 3.022 1.204 4.038m-2.907-4.165c.81-1.182 1.5-3.133.454-4.187-1.614-1.612-4.25-1.558-5.69 0-.646.698-2.654 3.535-3.536 4.606.398.397.798.815 1.15 1.25l2.05-1.92 2.05 1.92.51-.483z" /></svg>`
    },
  ];
}
