
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, MapPin, Phone, Mail } from 'lucide-angular';


@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, TranslatePipe, LucideAngularModule, NgOptimizedImage],
    template: `
    <footer class="relative overflow-hidden text-white pt-[65px] pb-10 bg-[linear-gradient(165deg,#121212_50%,#2A1E12_50%)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-6">
            <!-- Col 1: Brand -->
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <img ngSrc="assets/Logos/logo.png" alt="Logo" width="48" height="48" class="h-12 w-auto brightness-0 invert" />
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
                        <lucide-icon [name]="'map-pin'" [size]="20" class="mr-3 text-[#4A3728] mt-0.5"></lucide-icon>
                        <span>{{ 'HOME.FOOTER.CONTACT.ADDRESS_DESC' | translate }}</span>
                    </li>
                    
                    <!-- Engineering Contact -->
                    <li class="pt-2">
                        <span class="block text-[#EBC934] text-xs uppercase font-bold tracking-wider mb-1">{{ 'HOME.FOOTER.CONTACT.INQUIRIES' | translate }}</span>
                        <div class="flex items-center mb-1" dir="ltr">
                             <lucide-icon [name]="'phone'" [size]="16" class="mr-2 text-[#4A3728]"></lucide-icon>
                             <span>{{ 'HOME.FOOTER.CONTACT.PHONE' | translate }}</span>
                        </div>
                        <div class="flex items-center" dir="ltr">
                             <lucide-icon [name]="'mail'" [size]="16" class="mr-2 text-[#4A3728]"></lucide-icon>
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
