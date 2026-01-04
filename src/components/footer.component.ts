
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    template: `
    <footer class="relative overflow-hidden text-white pt-[65px] pb-10 bg-[linear-gradient(165deg,#121212_50%,#2A1E12_50%)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-6">
            <!-- Col 1: Brand -->
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <img src="assets/Logos/logo.png" alt="Logo" class="h-12 w-auto brightness-0 invert" />
                    <div class="flex flex-col leading-tight">
                        <span class="text-lg font-bold tracking-tight text-white" [innerHTML]="'HOME.LOGO_TEXT.TITLE' | translate"></span>
                        <span class="text-[10px] font-medium text-white/60 uppercase tracking-widest mt-0.5" [innerHTML]="'HOME.LOGO_TEXT.SUBTITLE' | translate"></span>
                    </div>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                    {{ 'HOME.FOOTER.BRAND_DESC' | translate }}
                </p>
            </div>

            <!-- Col 2: Quick Links -->
            <div>
                <h4 class="text-lg font-semibold mb-6">{{ 'HOME.FOOTER.LINKS.HEADER' | translate }}</h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.NAV.HOME' | translate }}</a></li>
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.FOOTER.LINKS.ABOUT' | translate }}</a></li>
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.NAV.PROJECTS' | translate }}</a></li>
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.FOOTER.LINKS.CAREERS' | translate }}</a></li>
                </ul>
            </div>

            <!-- Col 3: Services -->
            <div>
                <h4 class="text-lg font-semibold mb-6">{{ 'HOME.FOOTER.SERVICES.HEADER' | translate }}</h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.FOOTER.SERVICES.DESIGN' | translate }}</a></li>
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.FOOTER.SERVICES.SAFETY' | translate }}</a></li>
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.FOOTER.SERVICES.MGMT' | translate }}</a></li>
                    <li><a href="#" class="hover:text-[#4A3728] transition-colors">{{ 'HOME.FOOTER.SERVICES.URBAN' | translate }}</a></li>
                </ul>
            </div>

            <!-- Col 4: Contact -->
            <div>
                <h4 class="text-lg font-semibold mb-6">{{ 'HOME.FOOTER.CONTACT.HEADER' | translate }}</h4>
                <ul class="space-y-4 text-sm text-gray-400">
                     <li class="flex items-start">
                        <svg class="w-5 h-5 mr-3 text-[#4A3728] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>{{ 'HOME.FOOTER.CONTACT.ADDRESS_DESC' | translate }}</span>
                    </li>
                    
                    <!-- Engineering Contact -->
                    <li class="pt-2">
                        <span class="block text-[#EBC934] text-xs uppercase font-bold tracking-wider mb-1">{{ 'HOME.FOOTER.CONTACT.INQUIRIES' | translate }}</span>
                        <div class="flex items-center mb-1" dir="ltr">
                             <svg class="w-4 h-4 mr-2 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                             <span>{{ 'HOME.FOOTER.CONTACT.PHONE' | translate }}</span>
                        </div>
                        <div class="flex items-center" dir="ltr">
                             <svg class="w-4 h-4 mr-2 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                             <span>{{ 'HOME.FOOTER.CONTACT.EMAIL' | translate }}</span>
                        </div>
                    </li>


                </ul>
            </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>{{ 'HOME.FOOTER.COPYRIGHT' | translate }}</p>
            <p class="mt-2 md:mt-0">{{ 'HOME.FOOTER.TAGLINE' | translate }}</p>
        </div>
      </div>
    </footer>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
