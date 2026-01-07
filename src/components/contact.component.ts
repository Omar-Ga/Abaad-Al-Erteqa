import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, Phone, Mail, MessageCircle, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe, LucideAngularModule],
  template: `
    <section class="min-h-screen pt-28 pb-20 px-4 md:px-6 bg-[#F9F8F6]">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16 space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold text-[#4A3728] font-serif">
            {{ 'CONTACT_PAGE.TITLE' | translate }}
          </h1>
          <p class="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            {{ 'CONTACT_PAGE.SUBTITLE' | translate }}
          </p>
        </div>

        <!-- Contact Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          <!-- WhatsApp -->
          <a href="https://wa.me/966XXXXXXXXX" target="_blank" class="block group">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#4A3728]/10 hover:border-[#4A3728]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-1">
              <div class="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <lucide-icon [name]="'message-circle'" [size]="32" class="text-[#25D366]"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-[#4A3728] mb-2">{{ 'CONTACT_PAGE.WHATSAPP.TITLE' | translate }}</h3>
              <p class="text-[#4A4A4A]/80 mb-4">{{ 'CONTACT_PAGE.WHATSAPP.DESC' | translate }}</p>
              <span class="text-[#4A3728] font-semibold group-hover:underline decoration-1 underline-offset-4">{{ 'CONTACT_PAGE.WHATSAPP.ACTION' | translate }}</span>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:engineering@abaadsama.com" class="block group">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#4A3728]/10 hover:border-[#4A3728]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-1">
              <div class="w-16 h-16 rounded-full bg-[#EBC934]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <lucide-icon [name]="'mail'" [size]="32" class="text-[#D4AF37]"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-[#4A3728] mb-2">{{ 'CONTACT_PAGE.EMAIL.TITLE' | translate }}</h3>
              <p class="text-[#4A4A4A] font-medium mb-1 break-all">engineering@abaadsama.com</p>
              <p class="text-[#4A4A4A]/60 text-sm mb-4">{{ 'CONTACT_PAGE.EMAIL.DESC' | translate }}</p>
              <span class="text-[#4A3728] font-semibold group-hover:underline decoration-1 underline-offset-4">{{ 'CONTACT_PAGE.EMAIL.ACTION' | translate }}</span>
            </div>
          </a>

          <!-- Phone -->
          <a href="tel:+966110000000" class="block group">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#4A3728]/10 hover:border-[#4A3728]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-1">
              <div class="w-16 h-16 rounded-full bg-[#4A3728]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <lucide-icon [name]="'phone'" [size]="32" class="text-[#4A3728]"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-[#4A3728] mb-2">{{ 'CONTACT_PAGE.PHONE.TITLE' | translate }}</h3>
              <p class="text-[#4A4A4A] font-medium mb-1" dir="ltr">+966 11 000 0000</p>
              <p class="text-[#4A4A4A]/60 text-sm mb-4">{{ 'CONTACT_PAGE.PHONE.DESC' | translate }}</p>
              <span class="text-[#4A3728] font-semibold group-hover:underline decoration-1 underline-offset-4">{{ 'CONTACT_PAGE.PHONE.ACTION' | translate }}</span>
            </div>
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-[#4A3728]/10">
            <h2 class="text-2xl font-bold text-[#4A3728] mb-2">{{ 'CONTACT_PAGE.FORM.TITLE' | translate }}</h2>
            <p class="text-[#4A4A4A]/70 mb-8">{{ 'CONTACT_PAGE.FORM.SUBTITLE' | translate }}</p>
            
            <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
              <!-- Web3Forms Access Key will go here -->
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

              <div class="space-y-2">
                <label class="block text-sm font-semibold text-[#4A3728]">{{ 'CONTACT_PAGE.FORM.NAME' | translate }}</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-[#4A3728]/10 focus:border-[#4A3728] focus:ring-1 focus:ring-[#4A3728] outline-none transition-all"
                  [placeholder]="'CONTACT_PAGE.FORM.NAME' | translate"
                >
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-[#4A3728]">{{ 'CONTACT_PAGE.FORM.EMAIL' | translate }}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-[#4A3728]/10 focus:border-[#4A3728] focus:ring-1 focus:ring-[#4A3728] outline-none transition-all"
                    [placeholder]="'CONTACT_PAGE.FORM.EMAIL' | translate"
                  >
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-[#4A3728]">{{ 'CONTACT_PAGE.FORM.SUBJECT' | translate }}</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-[#4A3728]/10 focus:border-[#4A3728] focus:ring-1 focus:ring-[#4A3728] outline-none transition-all"
                    [placeholder]="'CONTACT_PAGE.FORM.SUBJECT' | translate"
                  >
                </div>
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-semibold text-[#4A3728]">{{ 'CONTACT_PAGE.FORM.MESSAGE' | translate }}</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 rounded-xl border border-[#4A3728]/10 focus:border-[#4A3728] focus:ring-1 focus:ring-[#4A3728] outline-none transition-all resize-none"
                  [placeholder]="'CONTACT_PAGE.FORM.MESSAGE' | translate"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full py-4 bg-[#4A3728] text-white font-bold rounded-xl hover:bg-[#3A2B20] transition-colors shadow-lg shadow-[#4A3728]/20 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {{ 'CONTACT_PAGE.FORM.SUBMIT' | translate }}
              </button>
            </form>
          </div>

          <!-- Map Section -->
          <div class="bg-white rounded-2xl p-2 md:p-3 shadow-sm border border-[#4A3728]/10 flex flex-col h-full">
              <div class="relative w-full flex-1 min-h-[400px] bg-gray-200 rounded-xl overflow-hidden group">
                  <div class="absolute inset-0 flex items-center justify-center bg-[#F3F0EB]">
                      <div class="text-center p-6">
                          <lucide-icon [name]="'map-pin'" [size]="48" class="mx-auto mb-3 opacity-50 text-[#4A3728]"></lucide-icon>
                          <span class="text-[#4A3728]/60 font-medium">{{ 'CONTACT_PAGE.MAP_PLACEHOLDER' | translate }}</span>
                      </div>
                  </div>
                  <img 
                      src="https://placehold.co/1200x800/F3F0EB/4A3728?text=Map+Location+Placeholder" 
                      alt="Map Location" 
                      class="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                  />
              </div>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private translationService = inject(TranslationService);

  constructor() {
    this.translationService.loadModule('Contact');
  }
}
