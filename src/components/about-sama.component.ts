import { Component, inject, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';
import { LucideAngularModule, Globe, ShieldCheck, Users, Flame, Bell, Wrench, FileText, ArrowRight, Award, Factory } from 'lucide-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-sama',
  standalone: true,
  imports: [CommonModule, TranslatePipe, LucideAngularModule],
  animations: [
    trigger('slideInSide', [
      state('hidden-left', style({ opacity: 0, transform: 'translateX(-100px)' })),
      state('hidden-right', style({ opacity: 0, transform: 'translateX(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('* => visible', [
        animate('1s cubic-bezier(0.16, 1, 0.3, 1)')
      ])
    ]),
    trigger('drawLine', [
      state('hidden', style({ height: '0%' })),
      state('visible', style({ height: '100%' })),
      transition('hidden => visible', [
        animate('1.5s ease-in-out')
      ])
    ]),
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('0.8s ease-out')
      ])
    ])
  ],
  template: `
    <div class="bg-[#0A0A0A] min-h-screen text-zinc-200 selection:bg-[#EBC934] selection:text-black font-manrope overflow-hidden" dir="auto">
      
      <!-- SECTION 1: HERO - The Hook -->
      <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Spotlight Effect -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0A0A0A] to-[#0A0A0A] opacity-80 pointer-events-none"></div>
        
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto" >
           <!-- Static fade in usage via simple CSS class or standard Angular setup, 
                but using the observer system for the requested sections below -->
          <div class="scroll-trigger" data-anim="fadeInUp">
            <p class="text-[#EBC934] font-semibold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
                {{ 'ABOUT_SAMA.HERO.OVERLINE' | translate }}
            </p>
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                {{ 'ABOUT_SAMA.HERO.HEADLINE' | translate }}
            </h1>
            <p class="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                {{ 'ABOUT_SAMA.HERO.SUBHEADLINE' | translate }}
            </p>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
          <span class="text-xs uppercase tracking-widest text-[#EBC934]">{{ 'ABOUT_SAMA.HERO.SCROLL' | translate }}</span>
          <div class="w-[1px] h-12 bg-gradient-to-b from-[#EBC934] to-transparent"></div>
        </div>
      </section>

      <!-- SECTION 2: VISION & MISSION -->
      <section class="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <!-- Sticky Visual (Left) -->
          <div class="hidden lg:block sticky top-32 h-[500px] w-full bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 shadow-2xl scroll-trigger" data-anim="fadeInUp">
             <div class="absolute inset-0 bg-gradient-to-br from-[#EBC934]/10 to-transparent"></div>
             <!-- Abstract 3D Element Placeholder -->
             <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-64 h-64 border-2 border-[#EBC934]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div class="absolute w-48 h-48 border border-[#EBC934]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             </div>
          </div>

          <!-- Content (Right) -->
          <div class="space-y-32">
            <!-- Mission -->
            <div class="group scroll-trigger" data-anim="slideInSide-right">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 group-hover:text-[#EBC934] transition-colors duration-500">
                {{ 'ABOUT_SAMA.MISSION.TITLE' | translate }}
              </h2>
              <p class="text-lg md:text-xl text-zinc-400 leading-loose transition-all duration-500 group-hover:text-zinc-200">
                {{ 'ABOUT_SAMA.MISSION.DESC' | translate }}
              </p>
            </div>

            <!-- Vision -->
             <div class="group scroll-trigger" data-anim="slideInSide-right">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 group-hover:text-[#EBC934] transition-colors duration-500">
                {{ 'ABOUT_SAMA.VISION.TITLE' | translate }}
              </h2>
              <p class="text-lg md:text-xl text-zinc-400 leading-loose transition-all duration-500 group-hover:text-zinc-200">
                {{ 'ABOUT_SAMA.VISION.DESC' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: TIMELINE - The Golden Thread -->
      <section class="relative py-32 bg-[#0F0F0F] overflow-hidden">
        <!-- Vertical Line (animated) -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#EBC934]/20 hidden md:block scroll-line-trigger" [@drawLine]="lineVisible ? 'visible' : 'hidden'"></div>
        
        <div class="max-w-6xl mx-auto px-4 relative z-10">
          <div class="text-center mb-24 scroll-trigger" data-anim="fadeInUp">
            <h2 class="text-[#EBC934] tracking-widest uppercase text-sm font-bold mb-4">{{ 'ABOUT_SAMA.TIMELINE.SUBTITLE' | translate }}</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-white">{{ 'ABOUT_SAMA.TIMELINE.TITLE' | translate }}</h3>
          </div>

          <div class="space-y-24 md:space-y-0 relative">
            
            <!-- Node 1: Foundation (Right Side in Arabic/RTL, Left in LTR) -->
            <!-- We use 'slideInSide' with 'hidden-left' or 'hidden-right' based on intended entry direction -->
            
            <div class="md:grid md:grid-cols-2 gap-12 items-center group">
              <!-- Text Side -->
              <div class="text-end md:pr-12 md:text-right mb-8 md:mb-0 scroll-trigger" data-anim="slideInSide-left">
                <span class="text-6xl md:text-8xl font-bold text-white/5 group-hover:text-[#EBC934]/10 transition-colors duration-500 block -mb-4 md:-mb-8">
                   {{ 'ABOUT_SAMA.TIMELINE.FOUNDATION.YEAR' | translate }}
                </span>
                <h4 class="text-2xl font-bold text-white mb-4">{{ 'ABOUT_SAMA.TIMELINE.FOUNDATION.TITLE' | translate }}</h4>
                <p class="text-zinc-400">{{ 'ABOUT_SAMA.TIMELINE.FOUNDATION.DESC' | translate }}</p>
              </div>
              <!-- Marker Side -->
              <div class="md:pl-12 relative flex justify-start scroll-trigger" data-anim="slideInSide-right">
                 <div class="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EBC934] rounded-full shadow-[0_0_15px_#EBC934]"></div>
              </div>
            </div>

            <!-- Node 2: Growth (Opposite Side) -->
            <div class="md:grid md:grid-cols-2 gap-12 items-center group">
               <!-- Spacer/Marker Side -->
              <div class="hidden md:block md:pr-12 relative scroll-trigger" data-anim="slideInSide-left">
                 <!-- Content normally here in Grid 1, but this is the spacer side so handled by layout. 
                      Actually needed: Content on RIGHT side for LTR, LEFT for RTL.
                      Grid logic: Col 1 is Left(LTR)/Right(RTL). Col 2 is Right(LTR)/Left(RTL).
                      We want Node 2 Text to appear on the opposite side of Node 1.
                      Node 1 Text was Col 1. Node 2 Text should be Col 2.
                 -->
              </div> 
              
              <div class="md:pl-12 md:border-l border-[#EBC934]/20 relative scroll-trigger" data-anim="slideInSide-right">
                <div class="hidden md:block absolute left-[-6.5px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EBC934] rounded-full shadow-[0_0_15px_#EBC934]"></div>
                <div class="text-start">
                   <span class="text-6xl md:text-8xl font-bold text-white/5 group-hover:text-[#EBC934]/10 transition-colors duration-500 block -mb-4 md:-mb-8">
                     {{ 'ABOUT_SAMA.TIMELINE.GROWTH.YEAR' | translate }}
                   </span>
                   <h4 class="text-2xl font-bold text-white mb-4">{{ 'ABOUT_SAMA.TIMELINE.GROWTH.TITLE' | translate }}</h4>
                   <p class="text-zinc-400">{{ 'ABOUT_SAMA.TIMELINE.GROWTH.DESC' | translate }}</p>
                </div>
              </div>
            </div>

             <!-- Node 3: Leadership (Back to First Side) -->
             <div class="md:grid md:grid-cols-2 gap-12 items-center group">
              <div class="text-end md:pr-12 md:text-right mb-8 md:mb-0 scroll-trigger" data-anim="slideInSide-left">
                <span class="text-6xl md:text-8xl font-bold text-white/5 group-hover:text-[#EBC934]/10 transition-colors duration-500 block -mb-4 md:-mb-8">
                   {{ 'ABOUT_SAMA.TIMELINE.LEADERSHIP.YEAR' | translate }}
                </span>
                <h4 class="text-2xl font-bold text-white mb-4">{{ 'ABOUT_SAMA.TIMELINE.LEADERSHIP.TITLE' | translate }}</h4>
                <p class="text-zinc-400">{{ 'ABOUT_SAMA.TIMELINE.LEADERSHIP.DESC' | translate }}</p>
              </div>
              <div class="md:pl-12 relative flex justify-start scroll-trigger" data-anim="slideInSide-right">
                 <div class="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EBC934] rounded-full shadow-[0_0_15px_#EBC934]"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SECTION 4: STANDARDS - Bento Grid -->
      <section class="py-32 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-trigger" data-anim="fadeInUp">
          <h2 class="text-4xl font-bold text-white">{{ 'ABOUT_SAMA.STANDARDS.TITLE' | translate }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="group relative bg-[#1A1A1A]/60 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:border-[#EBC934]/50 transition-all duration-500 hover:-translate-y-2 scroll-trigger" data-anim="fadeInUp">
            <div class="w-14 h-14 bg-[#EBC934]/10 rounded-xl flex items-center justify-center mb-6 text-[#EBC934] group-hover:scale-110 transition-transform duration-500">
               <lucide-icon name="globe" [size]="28" [strokeWidth]="1.5"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ 'ABOUT_SAMA.STANDARDS.INTERNATIONAL.TITLE' | translate }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ 'ABOUT_SAMA.STANDARDS.INTERNATIONAL.DESC' | translate }}</p>
          </div>

          <!-- Card 2 -->
          <div class="group relative bg-[#1A1A1A]/60 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:border-[#EBC934]/50 transition-all duration-500 hover:-translate-y-2 scroll-trigger" data-anim="fadeInUp" [style.transition-delay.ms]="200">
            <div class="w-14 h-14 bg-[#EBC934]/10 rounded-xl flex items-center justify-center mb-6 text-[#EBC934] group-hover:scale-110 transition-transform duration-500">
               <lucide-icon name="shield-check" [size]="28" [strokeWidth]="1.5"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ 'ABOUT_SAMA.STANDARDS.RELIABILITY.TITLE' | translate }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ 'ABOUT_SAMA.STANDARDS.RELIABILITY.DESC' | translate }}</p>
          </div>

          <!-- Card 3 -->
          <div class="group relative bg-[#1A1A1A]/60 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:border-[#EBC934]/50 transition-all duration-500 hover:-translate-y-2 scroll-trigger" data-anim="fadeInUp" [style.transition-delay.ms]="400">
            <div class="w-14 h-14 bg-[#EBC934]/10 rounded-xl flex items-center justify-center mb-6 text-[#EBC934] group-hover:scale-110 transition-transform duration-500">
               <lucide-icon name="users" [size]="28" [strokeWidth]="1.5"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ 'ABOUT_SAMA.STANDARDS.SATISFACTION.TITLE' | translate }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ 'ABOUT_SAMA.STANDARDS.SATISFACTION.DESC' | translate }}</p>
          </div>
        </div>
      </section>


      <!-- SECTION 5: SERVICES - Comprehensive Protection -->
      <section class="py-32 bg-[#0F0F0F] px-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
               <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ 'ABOUT_SAMA.SERVICES.TITLE' | translate }}</h2>
               <div class="h-1 w-24 bg-[#EBC934]"></div>
             </div>
             <div class="text-[#EBC934] flex items-center gap-2 text-sm uppercase font-bold tracking-widest animate-pulse">
                Scroll <lucide-icon name="arrow-right" [size]="16"></lucide-icon>
             </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <!-- Service 1: Firefighting -->
             <div class="group relative h-[400px] overflow-hidden rounded-2xl border border-white/5 hover:border-[#EBC934]/30 transition-all duration-500">
                <div class="absolute inset-0">
                   <img src="assets/images/about/firefighting.png" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" alt="Firefighting Systems">
                   <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <!-- Content -->
                <div class="relative h-full p-8 flex flex-col justify-end z-10">
                   <lucide-icon name="flame" class="text-[#EBC934] mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" [size]="32"></lucide-icon>
                   <h3 class="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     {{ 'ABOUT_SAMA.SERVICES.FIREFIGHTING.TITLE' | translate }}
                   </h3>
                   <p class="text-zinc-300 text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 leading-relaxed">
                     {{ 'ABOUT_SAMA.SERVICES.FIREFIGHTING.DESC' | translate }}
                   </p>
                </div>
             </div>

             <!-- Service 2: Alarm -->
              <div class="group relative h-[400px] overflow-hidden rounded-2xl border border-white/5 hover:border-[#EBC934]/30 transition-all duration-500">
                <div class="absolute inset-0">
                   <img src="assets/images/about/alarm.png" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" alt="Alarm Systems">
                   <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div class="relative h-full p-8 flex flex-col justify-end z-10">
                   <lucide-icon name="bell" class="text-[#EBC934] mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" [size]="32"></lucide-icon>
                   <h3 class="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     {{ 'ABOUT_SAMA.SERVICES.ALARM.TITLE' | translate }}
                   </h3>
                   <p class="text-zinc-300 text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 leading-relaxed">
                     {{ 'ABOUT_SAMA.SERVICES.ALARM.DESC' | translate }}
                   </p>
                </div>
             </div>

             <!-- Service 3: Maintenance -->
              <div class="group relative h-[400px] overflow-hidden rounded-2xl border border-white/5 hover:border-[#EBC934]/30 transition-all duration-500">
                <div class="absolute inset-0">
                   <img src="assets/images/about/maintenance.png" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" alt="Maintenance">
                   <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div class="relative h-full p-8 flex flex-col justify-end z-10">
                   <lucide-icon name="wrench" class="text-[#EBC934] mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" [size]="32"></lucide-icon>
                   <h3 class="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     {{ 'ABOUT_SAMA.SERVICES.MAINTENANCE.TITLE' | translate }}
                   </h3>
                   <p class="text-zinc-300 text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 leading-relaxed">
                     {{ 'ABOUT_SAMA.SERVICES.MAINTENANCE.DESC' | translate }}
                   </p>
                </div>
             </div>

             <!-- Service 4: Consultancy -->
              <div class="group relative h-[400px] overflow-hidden rounded-2xl border border-white/5 hover:border-[#EBC934]/30 transition-all duration-500">
                <div class="absolute inset-0">
                   <img src="assets/images/about/consultancy.png" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" alt="Consultancy">
                   <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div class="relative h-full p-8 flex flex-col justify-end z-10">
                   <lucide-icon name="file-text" class="text-[#EBC934] mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" [size]="32"></lucide-icon>
                   <h3 class="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     {{ 'ABOUT_SAMA.SERVICES.CONSULTANCY.TITLE' | translate }}
                   </h3>
                   <p class="text-zinc-300 text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 leading-relaxed">
                     {{ 'ABOUT_SAMA.SERVICES.CONSULTANCY.DESC' | translate }}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: TRUST - Approved by Authority -->
      <!-- SECTION 6: TRUST - Approved by Authority (REDESIGNED) -->
      <section class="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
         <!-- Decorative background glow -->
         <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gradient-to-b from-[#EBC934]/5 to-transparent blur-[100px] pointer-events-none"></div>

         <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-20 scroll-trigger" data-anim="fadeInUp">
               <h2 class="text-[#EBC934] tracking-[0.3em] uppercase text-sm font-bold mb-6">ACCREDITATIONS</h2>
               <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">{{ 'ABOUT_SAMA.TRUST.TITLE' | translate }}</h3>
               <p class="text-zinc-400 max-w-2xl mx-auto text-lg">{{ 'ABOUT_SAMA.TRUST.DESC' | translate }}</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Certification 1: Civil Defense -->
                <div class="group relative p-10 bg-[#121212] border border-white/5 rounded-2xl hover:border-[#EBC934]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] scroll-trigger" data-anim="fadeInUp">
                   <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                   
                   <div class="relative z-10 flex flex-col items-center text-center">
                     <div class="w-20 h-20 mb-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#EBC934] transition-all duration-500">
                        <lucide-icon name="shield-check" class="text-zinc-500 group-hover:text-[#EBC934] transition-colors duration-500" [size]="36" [strokeWidth]="1.5"></lucide-icon>
                     </div>
                     
                     <h4 class="text-xl font-bold text-white mb-3 group-hover:text-[#EBC934] transition-colors duration-300">
                        {{ 'ABOUT_SAMA.TRUST.BADGES.CIVIL' | translate }}
                     </h4>
                     
                     <!-- Decorative line -->
                     <div class="w-12 h-1 bg-[#2A2A2A] rounded-full group-hover:bg-[#EBC934] group-hover:w-24 transition-all duration-500"></div>
                   </div>
                </div>

                 <!-- Certification 2: HCIS -->
                <div class="group relative p-10 bg-[#121212] border border-white/5 rounded-2xl hover:border-[#EBC934]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] scroll-trigger" data-anim="fadeInUp" [style.transition-delay.ms]="100">
                   <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                   
                   <div class="relative z-10 flex flex-col items-center text-center">
                     <div class="w-20 h-20 mb-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#EBC934] transition-all duration-500">
                        <lucide-icon name="factory" class="text-zinc-500 group-hover:text-[#EBC934] transition-colors duration-500" [size]="36" [strokeWidth]="1.5"></lucide-icon>
                     </div>
                     
                     <h4 class="text-xl font-bold text-white mb-3 group-hover:text-[#EBC934] transition-colors duration-300">
                        {{ 'ABOUT_SAMA.TRUST.BADGES.HCIS' | translate }}
                     </h4>
                     
                     <div class="w-12 h-1 bg-[#2A2A2A] rounded-full group-hover:bg-[#EBC934] group-hover:w-24 transition-all duration-500"></div>
                   </div>
                </div>

                 <!-- Certification 3: Safety -->
                <div class="group relative p-10 bg-[#121212] border border-white/5 rounded-2xl hover:border-[#EBC934]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] scroll-trigger" data-anim="fadeInUp" [style.transition-delay.ms]="200">
                   <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                   
                   <div class="relative z-10 flex flex-col items-center text-center">
                     <div class="w-20 h-20 mb-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#EBC934] transition-all duration-500">
                        <lucide-icon name="award" class="text-zinc-500 group-hover:text-[#EBC934] transition-colors duration-500" [size]="36" [strokeWidth]="1.5"></lucide-icon>
                     </div>
                     
                     <h4 class="text-xl font-bold text-white mb-3 group-hover:text-[#EBC934] transition-colors duration-300">
                        {{ 'ABOUT_SAMA.TRUST.BADGES.SAFETY' | translate }}
                     </h4>
                     
                     <div class="w-12 h-1 bg-[#2A2A2A] rounded-full group-hover:bg-[#EBC934] group-hover:w-24 transition-all duration-500"></div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      <!-- SECTION 7: CTA - Partner with SAMA -->
      <section class="relative py-32 bg-gradient-to-t from-[#EBC934]/20 to-[#0A0A0A] overflow-hidden text-center">
         <div class="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div>
         
         <div class="relative z-10 px-4 max-w-4xl mx-auto">
            <h2 class="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
               {{ 'ABOUT_SAMA.CTA.HEADLINE' | translate }}
            </h2>
            <button class="group relative px-12 py-5 bg-[#EBC934] text-black font-bold text-lg tracking-wider hover:bg-[#D4B52F] transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(235,201,52,0.5)]">
               <span class="relative z-10">{{ 'ABOUT_SAMA.CTA.BUTTON' | translate }}</span>
               <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
         </div>
      </section>

    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    /* Base scroll trigger state: Hidden and offset */
    .scroll-trigger {
      opacity: 0;
      transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }

    /* Initial Transforms based on data-anim type */
    .scroll-trigger[data-anim="fadeInUp"] {
      transform: translateY(40px);
    }
    
    .scroll-trigger[data-anim="slideInSide-left"] {
       /* Enters from LEFT (starts at -X) */
       transform: translateX(-100px);
    }

    .scroll-trigger[data-anim="slideInSide-right"] {
       /* Enters from RIGHT (starts at +X) */
       transform: translateX(100px);
    }

    /* Active State */
    .scroll-trigger.in-view {
      opacity: 1 !important;
      transform: translate(0, 0) !important;
    }
  `]
})
export class AboutSamaComponent implements OnInit, AfterViewInit, OnDestroy {
  private translationService = inject(TranslationService);
  private elementRef = inject(ElementRef);
  private observer: IntersectionObserver | null = null;
  public lineVisible = false;

  ngOnInit() {
    this.translationService.loadModule('AboutSama');
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          if (target.classList.contains('scroll-line-trigger')) {
            this.lineVisible = true;
          } else {
            target.classList.add('in-view');
          }

          // Unobserve after triggering once
          this.observer?.unobserve(target);
        }
      });
    }, options);

    // Observe all elements with .scroll-trigger class
    const triggers = this.elementRef.nativeElement.querySelectorAll('.scroll-trigger');
    triggers.forEach((el: Element) => this.observer?.observe(el));

    // Observe line
    const line = this.elementRef.nativeElement.querySelector('.scroll-line-trigger');
    if (line) this.observer?.observe(line);
  }
}

