
import { Component, ChangeDetectionStrategy, signal, HostListener, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';
import { inject } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { filter, map } from 'rxjs/operators';
import { LucideAngularModule, Menu, X, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslatePipe, RouterLink, LucideAngularModule, NgOptimizedImage],
  template: `
    <nav 
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b"
      [class]="navClasses()"
    >
      <div class="max-w-7xl mx-auto px-3 md:px-6 h-20 flex items-center justify-between">
        <!-- Logo Area -->
        <a routerLink="/" class="flex items-center gap-1 md:gap-2 decoration-none group">
            <img ngSrc="assets/Logos/logo.png" alt="Logo" width="64" height="64" priority class="h-10 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
            
            <div 
              class="flex flex-col leading-tight border-r pr-1 md:pr-2 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-1 md:rtl:pl-2 transition-colors duration-300"
              [class.border-[#4A3728]/20]="showDarkText()"
              [class.border-white/20]="!showDarkText()"
            >
              <span 
                class="font-bold tracking-tight whitespace-nowrap transition-colors duration-300" 
                [class.text-[#4A3728]]="showDarkText()"
                [class.text-white]="!showDarkText()"
                [class.text-lg]="currentLang() === 'AR'"
                [class.md:text-[24px]]="currentLang() === 'AR'"
                [class.text-sm]="currentLang() === 'EN'"
                [class.md:text-[20px]]="currentLang() === 'EN'"
                [innerHTML]="'HOME.LOGO_TEXT.TITLE' | translate"
              ></span>
              <span 
                class="font-medium uppercase tracking-widest mt-0.5 whitespace-nowrap transition-colors duration-300" 
                [class.text-[#4A3728]/70]="showDarkText()"
                [class.text-white/70]="!showDarkText()"
                [class.text-[10px]]="currentLang() === 'AR'"
                [class.md:text-[13px]]="currentLang() === 'AR'"
                [class.text-[8px]]="currentLang() === 'EN'"
                [class.md:text-[12px]]="currentLang() === 'EN'"
                [innerHTML]="'HOME.LOGO_TEXT.SUBTITLE' | translate"
              ></span>
            </div>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
          <a routerLink="/" class="text-sm font-medium hover:text-[#4A3728] transition-colors" [class.text-white]="!showDarkText()" [class.text-[#4A4A4A]]="showDarkText()">{{ 'HOME.NAV.HOME' | translate }}</a>
          



          


          <!-- Projects Dropdown -->
          <div class="relative group h-full flex items-center">
            <button class="flex items-center gap-1 text-sm font-medium hover:text-[#4A3728] transition-colors focus:outline-none" [class.text-white]="!showDarkText()" [class.text-[#4A4A4A]]="showDarkText()">
              {{ 'HOME.NAV.PROJECTS' | translate }}
              <lucide-icon [name]="'chevron-down'" [size]="16" class="group-hover:rotate-180 transition-transform duration-200"></lucide-icon>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute top-12 left-1/2 -translate-x-1/2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-4">
              <div class="bg-white/95 backdrop-blur-md border border-[#4A3728]/20 rounded-md shadow-xl overflow-hidden flex flex-col">
                <a routerLink="/projects/abaad" class="block px-4 py-3 text-sm text-[#4A4A4A] hover:bg-[#4A3728] hover:text-white transition-colors border-b border-gray-100">
                  <span class="block font-bold">{{ 'HOME.NAV.ABAAD_PROJECTS' | translate }}</span>
                  <span class="text-xs opacity-75">{{ 'HOME.NAV.ABAAD_DESC' | translate }}</span>
                </a>
                <a routerLink="/projects/sama" class="block px-4 py-3 text-sm text-[#4A4A4A] hover:bg-[#EBC934] hover:text-[#1A1A1A] transition-colors">
                  <span class="block font-bold">{{ 'HOME.NAV.SAMA_PROJECTS' | translate }}</span>
                  <span class="text-xs opacity-75">{{ 'HOME.NAV.SAMA_DESC' | translate }}</span>
                </a>
              </div>
            </div>
          </div>

          <a routerLink="/contact" class="text-sm font-medium hover:text-[#4A3728] transition-colors" [class.text-white]="!showDarkText()" [class.text-[#4A4A4A]]="showDarkText()">{{ 'HOME.NAV.CONTACT' | translate }}</a>
        </div>

        <!-- Right Side Utils -->
        <div class="flex items-center gap-2 md:gap-4">
           <!-- Language Switcher -->
           <app-language-switcher [isScrolled]="showDarkText()"></app-language-switcher>

           <!-- Desktop CTA -->
           <a 
             routerLink="/contact" 
             class="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4A3728]/20"
             [class.bg-white]="!showDarkText()"
             [class.text-[#4A3728]]="!showDarkText()"
             [class.bg-[#4A3728]]="showDarkText()"
             [class.text-white]="showDarkText()"
           >
             {{ 'HOME.HERO.CTA' | translate }}
           </a>
 
           <!-- Mobile Menu Button -->
           <button 
             class="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none" 
             [class.text-white]="!showDarkText() && !mobileMenuOpen()" 
             [class.text-[#4A3728]]="showDarkText() || mobileMenuOpen()"
             (click)="toggleMobileMenu()"
             aria-label="Toggle mobile menu"
           >
             <lucide-icon [name]="'menu'" [size]="24"></lucide-icon>
           </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div 
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden"
      [class.opacity-0]="!mobileMenuOpen()"
      [class.pointer-events-none]="!mobileMenuOpen()"
      [class.opacity-100]="mobileMenuOpen()"
      [class.pointer-events-auto]="mobileMenuOpen()"
      (click)="toggleMobileMenu()"
    ></div>

    <!-- Mobile Side Menu -->
    <div 
      class="fixed top-0 bottom-0 z-[70] w-[80%] max-w-sm bg-[#F9F8F6] shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col"
      [class.translate-x-full]="!mobileMenuOpen() && currentLang() === 'EN'"
      [class.translate-x-0]="mobileMenuOpen() && currentLang() === 'EN'"
      [class.-translate-x-full]="!mobileMenuOpen() && currentLang() === 'AR'"
      [class.-translate-x-0]="mobileMenuOpen() && currentLang() === 'AR'"
      [class.right-0]="currentLang() === 'EN'"
      [class.left-0]="currentLang() === 'AR'"
    >
      <!-- Header with Logo and Close -->
      <div class="h-20 flex items-center justify-between px-6 border-b border-[#4A3728]/10 bg-white">
        <div class="flex items-center gap-2">
           <!-- Optional: Mobile Logo -->
           <img ngSrc="assets/Logos/logo.png" alt="Logo" width="32" height="32" class="h-8 w-auto" />
           <span class="font-bold text-[#4A3728] text-lg">{{ 'HOME.LOGO_TEXT.TITLE' | translate }}</span>
        </div>
        <button 
          (click)="toggleMobileMenu()"
          class="p-2 rounded-full hover:bg-black/5 text-[#4A3728] transition-colors focus:outline-none"
        >
          <lucide-icon [name]="'x'" [size]="24"></lucide-icon>
        </button>
      </div>

      <!-- Scrollable Content -->
      <div class="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
        <a routerLink="/" (click)="toggleMobileMenu()" class="block px-4 py-3 text-lg font-medium text-[#4A4A4A] hover:bg-[#4A3728]/5 hover:text-[#4A3728] rounded-lg transition-colors">
          {{ 'HOME.NAV.HOME' | translate }}
        </a>





        <!-- Mobile Projects Dropdown -->
        <div class="rounded-lg overflow-hidden transition-all duration-300" [class.bg-[#4A3728]/5]="mobileProjectsOpen()">
          <button 
            (click)="toggleMobileProjects()"
            class="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-[#4A4A4A] hover:text-[#4A3728] transition-colors focus:outline-none"
          >
            {{ 'HOME.NAV.PROJECTS' | translate }}
            <lucide-icon 
              [name]="'chevron-down'" 
              [size]="20"
              class="transition-transform duration-300 text-[#4A3728]/60"
              [class.rotate-180]="mobileProjectsOpen()"
            ></lucide-icon>
          </button>
          
          <div 
            class="overflow-hidden transition-all duration-300"
            [style.max-height]="mobileProjectsOpen() ? '300px' : '0px'"
          >
            <div class="pb-2 flex flex-col">
                <a routerLink="/projects/abaad" (click)="toggleMobileMenu()" class="block pl-8 pr-4 py-2 text-base text-[#4A4A4A]/80 hover:text-[#4A3728] transition-colors border-l-2 border-transparent hover:border-[#4A3728] ml-4">
                  {{ 'HOME.NAV.ABAAD_PROJECTS' | translate }}
                </a>
                <a routerLink="/projects/sama" (click)="toggleMobileMenu()" class="block pl-8 pr-4 py-2 text-base text-[#4A4A4A]/80 hover:text-[#4A3728] transition-colors border-l-2 border-transparent hover:border-[#4A3728] ml-4">
                  {{ 'HOME.NAV.SAMA_PROJECTS' | translate }}
                </a>
            </div>
          </div>
        </div>

        <a routerLink="/contact" (click)="toggleMobileMenu()" class="block px-4 py-3 text-lg font-medium text-[#4A4A4A] hover:bg-[#4A3728]/5 hover:text-[#4A3728] rounded-lg transition-colors">
          {{ 'HOME.NAV.CONTACT' | translate }}
        </a>
      </div>

      <!-- Footer/Action Area -->
      <div class="p-6 border-t border-[#4A3728]/10 bg-white/50">
        <a routerLink="/contact" (click)="toggleMobileMenu()" class="block w-full text-center py-3 bg-[#4A3728] text-white font-medium rounded-lg hover:bg-[#3A2B20] transition-colors shadow-lg shadow-[#4A3728]/20">
          {{ 'HOME.HERO.CTA' | translate }}
        </a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private translationService = inject(TranslationService);
  private router = inject(Router);
  currentLang = this.translationService.currentLang;

  // Track URL for route-aware styling
  url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    { initialValue: this.router.url }
  );

  isHomePage = computed(() => {
    const currentUrl = this.url();
    return currentUrl === '/' || currentUrl === '/home' || currentUrl === '';
  });

  scrollY = signal(0);
  mobileMenuOpen = signal(false);
  mobileProjectsOpen = signal(false);
  mobileAboutOpen = signal(false);

  // Computed signal to determine if we are scrolled past a threshold
  isScrolled = computed(() => this.scrollY() > 50);

  // Show dark text if scrolled OR not on homepage
  showDarkText = computed(() => !this.isHomePage() || this.isScrolled());

  // Dynamic classes for the navbar container
  navClasses = computed(() => {
    if (this.showDarkText()) {
      return 'bg-[#F9F8F6]/80 backdrop-blur-md border-[#4A3728]/20 shadow-sm';
    } else {
      return 'bg-white/5 backdrop-blur-md border-[#4A3728]/20 border-opacity-30';
    }
  });

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollY.set(window.scrollY);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768 && this.mobileMenuOpen()) {
      this.toggleMobileMenu(); // Close if we resize to desktop
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleMobileProjects() {
    this.mobileProjectsOpen.update(v => !v);
  }

  toggleMobileAbout() {
    this.mobileAboutOpen.update(v => !v);
  }
}
