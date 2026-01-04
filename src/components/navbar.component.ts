
import { Component, ChangeDetectionStrategy, signal, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav 
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b"
      [class]="navClasses()"
    >
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo Area -->
        <div class="flex items-center gap-2">
            <div class="h-8 w-8 bg-[#8B5E3C] rounded-sm flex items-center justify-center text-white font-bold text-lg">A</div>
            <span class="text-xl font-bold tracking-tight uppercase" [class.text-white]="!isScrolled()" [class.text-[#1A1A1A]]="isScrolled()">
              Abaad <span class="text-[#8B5E3C]">|</span> Sama
            </span>
        </div>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-sm font-medium hover:text-[#8B5E3C] transition-colors" [class.text-white]="!isScrolled()" [class.text-[#4A4A4A]]="isScrolled()">Home</a>
          <a href="#" class="text-sm font-medium hover:text-[#8B5E3C] transition-colors" [class.text-white]="!isScrolled()" [class.text-[#4A4A4A]]="isScrolled()">Consultants</a>
          
          <!-- Projects Dropdown -->
          <div class="relative group h-full flex items-center">
            <button class="flex items-center gap-1 text-sm font-medium hover:text-[#8B5E3C] transition-colors focus:outline-none" [class.text-white]="!isScrolled()" [class.text-[#4A4A4A]]="isScrolled()">
              Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-180 transition-transform duration-200"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute top-12 left-1/2 -translate-x-1/2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-4">
              <div class="bg-white/95 backdrop-blur-md border border-[#8B5E3C]/20 rounded-md shadow-xl overflow-hidden flex flex-col">
                <a href="#" class="block px-4 py-3 text-sm text-[#4A4A4A] hover:bg-[#8B5E3C] hover:text-white transition-colors border-b border-gray-100">
                  <span class="block font-bold">Abaad Projects</span>
                  <span class="text-xs opacity-75">Engineering & Design</span>
                </a>
                <a href="#" class="block px-4 py-3 text-sm text-[#4A4A4A] hover:bg-[#EBC934] hover:text-[#1A1A1A] transition-colors">
                  <span class="block font-bold">Sama Projects</span>
                  <span class="text-xs opacity-75">Safety & Execution</span>
                </a>
              </div>
            </div>
          </div>

          <a href="#" class="text-sm font-medium hover:text-[#8B5E3C] transition-colors" [class.text-white]="!isScrolled()" [class.text-[#4A4A4A]]="isScrolled()">Executions</a>
          <a href="#" class="text-sm font-medium hover:text-[#8B5E3C] transition-colors" [class.text-white]="!isScrolled()" [class.text-[#4A4A4A]]="isScrolled()">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 rounded-md hover:bg-white/10" [class.text-white]="!isScrolled()" [class.text-[#1A1A1A]]="isScrolled()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  scrollY = signal(0);
  
  // Computed signal to determine if we are scrolled past a threshold
  isScrolled = computed(() => this.scrollY() > 50);

  // Dynamic classes for the navbar container
  navClasses = computed(() => {
    if (this.isScrolled()) {
      return 'bg-[#F9F8F6]/80 backdrop-blur-md border-[#8B5E3C]/20 shadow-sm';
    } else {
      return 'bg-white/5 backdrop-blur-md border-[#8B5E3C]/20 border-opacity-30';
    }
  });

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollY.set(window.scrollY);
  }
}
