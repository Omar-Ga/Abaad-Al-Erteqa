
import { Component, ChangeDetectionStrategy, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, MapPin, Phone, Mail } from 'lucide-angular';
import { NavbarService } from '../services/navbar.service';


@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, TranslatePipe, LucideAngularModule, NgOptimizedImage, RouterLink],
    template: `
    <footer class="relative overflow-hidden text-white pt-16 pb-8 bg-[#121212]">
      <!-- Decorative Top Border -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4A3728] via-[#EBC934] to-[#4A3728]"></div>
      
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 pb-10 border-b border-white/10">
            <!-- Col 1: Brand -->
            <div class="md:col-span-1">
                <div class="flex items-center gap-3 mb-5">
                    <img ngSrc="assets/Logos/logo.png" alt="Logo" width="56" height="56" class="h-14 w-auto brightness-0 invert" />
                    <div class="flex flex-col leading-tight">
                        <span class="text-xl font-bold tracking-tight text-white" [innerHTML]="'HOME.LOGO_TEXT.TITLE' | translate"></span>
                        <span class="text-[10px] font-medium text-white/60 uppercase tracking-widest mt-0.5" [innerHTML]="'HOME.LOGO_TEXT.SUBTITLE' | translate"></span>
                    </div>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-5">
                    {{ 'HOME.FOOTER.BRAND_DESC' | translate }}
                </p>
                <!-- Social Icons Placeholder -->
                <div class="flex items-center gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4A3728] transition-colors">
                        <lucide-icon [name]="'phone'" [size]="18" class="text-white"></lucide-icon>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EBC934] hover:text-[#1A1A1A] transition-colors">
                        <lucide-icon [name]="'mail'" [size]="18" class="text-white"></lucide-icon>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4A3728] transition-colors">
                        <lucide-icon [name]="'map-pin'" [size]="18" class="text-white"></lucide-icon>
                    </a>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div>
                <h4 class="text-lg font-semibold mb-5 text-white relative inline-block">
                    {{ 'HOME.FOOTER.LINKS.HEADER' | translate }}
                    <span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#EBC934]"></span>
                </h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li>
                        <a routerLink="/" (click)="scrollToTop()" class="hover:text-[#EBC934] transition-colors cursor-pointer flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-[#4A3728] rounded-full"></span>
                            {{ 'HOME.NAV.HOME' | translate }}
                        </a>
                    </li>
                    <li>
                        <button (click)="scrollToNavbarAndOpenDropdown()" class="hover:text-[#EBC934] transition-colors flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-[#4A3728] rounded-full"></span>
                            {{ 'HOME.NAV.PROJECTS' | translate }}
                        </button>
                    </li>
                    <li>
                        <a routerLink="/contact" class="hover:text-[#EBC934] transition-colors flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-[#4A3728] rounded-full"></span>
                            {{ 'HOME.NAV.CONTACT' | translate }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Col 3: Contact -->
            <div>
                <h4 class="text-lg font-semibold mb-5 text-white relative inline-block">
                    {{ 'HOME.FOOTER.CONTACT.HEADER' | translate }}
                    <span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#EBC934]"></span>
                </h4>
                <ul class="space-y-4 text-sm text-gray-400">
                    <li class="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-[#4A3728]/30 flex items-center justify-center shrink-0">
                            <lucide-icon [name]="'map-pin'" [size]="18" class="text-[#EBC934]"></lucide-icon>
                        </div>
                        <span class="leading-relaxed">{{ 'HOME.FOOTER.CONTACT.ADDRESS_DESC' | translate }}</span>
                    </li>
                    
                    <li class="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" dir="ltr">
                        <div class="w-10 h-10 rounded-full bg-[#4A3728]/30 flex items-center justify-center shrink-0">
                            <lucide-icon [name]="'phone'" [size]="18" class="text-[#EBC934]"></lucide-icon>
                        </div>
                        <span>{{ 'HOME.FOOTER.CONTACT.PHONE' | translate }}</span>
                    </li>
                    
                    <li class="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" dir="ltr">
                        <div class="w-10 h-10 rounded-full bg-[#4A3728]/30 flex items-center justify-center shrink-0">
                            <lucide-icon [name]="'mail'" [size]="18" class="text-[#EBC934]"></lucide-icon>
                        </div>
                        <span>{{ 'HOME.FOOTER.CONTACT.EMAIL' | translate }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-500">{{ 'HOME.FOOTER.COPYRIGHT' | translate }}</p>
            <p class="text-sm text-[#EBC934] font-medium">{{ 'HOME.FOOTER.TAGLINE' | translate }}</p>
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-[#4A3728]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-20 left-0 w-48 h-48 bg-[#EBC934]/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    private navbarService = inject(NavbarService);

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    scrollToTop() {
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    scrollToNavbarAndOpenDropdown() {
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                this.navbarService.openProjectsDropdown();
            }, 600);
        }
    }
}
