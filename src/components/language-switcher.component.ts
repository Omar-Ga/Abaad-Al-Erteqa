import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggle()"
      class="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-colors border"
      [class.bg-white]="!isScrolled"
      [class.text-[#1A1A1A]]="!isScrolled"
      [class.bg-[#4A3728]]="isScrolled"
      [class.text-white]="isScrolled"
      [class.border-transparent]="isScrolled"
      [class.border-white]="!isScrolled"
    >
      <span class="uppercase">{{ currentLang() }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" x2="22" y1="12" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </button>
  `
})
export class LanguageSwitcherComponent {
  translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  // Input to adapt to navbar style if needed, utilizing plain input for simplicity first
  // but navbar passes this context.
  // For now let's assume it handles its own style or accepts inputs.
  // Let's add an input for 'isScrolled' to match navbar theming.

  private _isScrolled = false;
  get isScrolled() { return this._isScrolled; }
  @Input() set isScrolled(val: boolean) { this._isScrolled = val; }

  toggle() {
    this.translationService.toggleLanguage();
  }
}
