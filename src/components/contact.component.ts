import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, Phone, Mail, MessageCircle, MapPin, Check, AlertCircle } from 'lucide-angular';

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
              <h3 class="text-xl font-bold text-[#4A3728] mb-4">{{ 'CONTACT_PAGE.WHATSAPP.TITLE' | translate }}</h3>
              <span class="text-[#4A3728] font-semibold group-hover:underline decoration-1 underline-offset-4">{{ 'CONTACT_PAGE.WHATSAPP.ACTION' | translate }}</span>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:oomarolayan.gamal@gmail.com" class="block group">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#4A3728]/10 hover:border-[#4A3728]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-1">
              <div class="w-16 h-16 rounded-full bg-[#EBC934]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <lucide-icon [name]="'mail'" [size]="32" class="text-[#D4AF37]"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-[#4A3728] mb-2">{{ 'CONTACT_PAGE.EMAIL.TITLE' | translate }}</h3>
              <p class="text-[#4A4A4A] font-medium mb-4 break-all">oomarolayan.gamal@gmail.com</p>
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
              <p class="text-[#4A4A4A] font-medium mb-4" dir="ltr">+966 11 000 0000</p>
              <span class="text-[#4A3728] font-semibold group-hover:underline decoration-1 underline-offset-4">{{ 'CONTACT_PAGE.PHONE.ACTION' | translate }}</span>
            </div>
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-[#4A3728]/10">
            <h2 class="text-2xl font-bold text-[#4A3728] mb-2">{{ 'CONTACT_PAGE.FORM.TITLE' | translate }}</h2>
            <p class="text-[#4A4A4A]/70 mb-8">{{ 'CONTACT_PAGE.FORM.SUBTITLE' | translate }}</p>
            
            @if (submissionStatus() === 'success') {
              <div class="text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <lucide-icon [name]="'check'" [size]="40" class="text-green-600"></lucide-icon>
                </div>
                <h3 class="text-2xl font-bold text-[#4A3728] mb-3">{{ 'CONTACT_PAGE.FORM.SUCCESS' | translate }}</h3>
                <p class="text-[#4A4A4A] mb-8">Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  (click)="resetForm()"
                  class="px-8 py-3 bg-[#4A3728] text-white font-bold rounded-xl hover:bg-[#3A2B20] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            } @else {
              <form (submit)="onSubmit($event)" class="space-y-6">
                <!-- Error Message -->
                @if (submissionStatus() === 'error') {
                  <div class="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <lucide-icon [name]="'alert-circle'" [size]="20" class="text-red-600"></lucide-icon>
                    </div>
                    <div>
                      <h4 class="font-bold text-red-800">{{ 'CONTACT_PAGE.FORM.ERROR_PREFIX' | translate }}</h4>
                      <p class="text-sm text-red-600">{{ errorMessage() || ('CONTACT_PAGE.FORM.GENERIC_ERROR' | translate) }}</p>
                    </div>
                  </div>
                }
              
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
                [disabled]="isSubmitting()"
                class="w-full py-4 bg-[#4A3728] text-white font-bold rounded-xl hover:bg-[#3A2B20] transition-colors shadow-lg shadow-[#4A3728]/20 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {{ isSubmitting() ? 'Sending...' : ('CONTACT_PAGE.FORM.SUBMIT' | translate) }}
              </button>
            </form>
            }
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
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
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
  isSubmitting = signal(false);
  submissionStatus = signal<'idle' | 'success' | 'error'>('idle');
  errorMessage = signal('');

  constructor() {
    this.translationService.loadModule('Contact');
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const formData = new FormData(form);
    // TODO: Replace with your own access key from https://web3forms.com/
    formData.append("access_key", "dab0a64d-9b4b-4f9a-8653-74bf6035df36");

    this.isSubmitting.set(true);
    this.submissionStatus.set('idle');
    this.errorMessage.set('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        this.submissionStatus.set('success');
        form.reset();
      } else {
        this.submissionStatus.set('error');
        this.errorMessage.set(data.message);
      }

    } catch (error) {
      this.submissionStatus.set('error');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  resetForm() {
    this.submissionStatus.set('idle');
    this.errorMessage.set('');
  }
}
