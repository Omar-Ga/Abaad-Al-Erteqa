import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ContentfulService } from '../services/contentful.service';
import { TranslationService } from '../services/translation.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-sama-category-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen py-32 bg-[#0A0A0A] overflow-hidden relative" dir="auto">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-[#151515] skew-x-[-12deg] origin-top opacity-100 -mr-20 z-0"></div>
      
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div *ngIf="!pageConfig()" class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EBC934]"></div>
        </div>

        <!-- Main Content -->
        <div *ngIf="pageConfig() as config" class="max-w-7xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {{ config.pageTitle }}
          </h1>
          <div class="mt-4 max-w-2xl mx-auto h-1 bg-[#EBC934] rounded"></div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div *ngFor="let project of projects()" 
               class="bg-[#1A1A1A] border border-white/5 rounded-xl shadow-lg overflow-hidden hover:shadow-[#EBC934]/20 hover:border-[#EBC934]/30 transition-all duration-300 flex flex-col group">
            
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden">
              <img [src]="project.coverImage" 
                   [alt]="project.title"
                   class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#EBC934] transition-colors duration-300">{{ project.title }}</h3>
              
              <dl class="space-y-3 text-sm flex-1 text-zinc-300">
                <!-- Owner -->
                <div *ngIf="project.ownerName" class="flex justify-between items-center border-b border-white/5 pb-2">
                  <dt class="font-medium text-zinc-500">{{ config.labelOwner }}</dt>
                  <dd class="font-semibold text-zinc-200">{{ project.ownerName }}</dd>
                </div>
                
                <!-- Location -->
                <div *ngIf="project.location" class="flex justify-between items-center border-b border-white/5 pb-2">
                  <dt class="font-medium text-zinc-500">{{ config.labelLocation }}</dt>
                  <dd class="font-semibold text-zinc-200">{{ project.location }}</dd>
                </div>

                <!-- Size -->
                <div *ngIf="project.size" class="flex justify-between items-center border-b border-white/5 pb-2">
                  <dt class="font-medium text-zinc-500">{{ config.labelSize }}</dt>
                  <dd class="font-semibold text-zinc-200">{{ project.size }}</dd>
                </div>

                <!-- Price -->
                <div *ngIf="project.price" class="flex justify-between items-center pt-1">
                  <dt class="font-medium text-zinc-500">{{ config.labelPrice }}</dt>
                  <dd class="font-bold text-[#EBC934] text-lg">{{ project.price }}</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>

        <!-- Empty State -->
        <div *ngIf="projects().length === 0" class="text-center py-12">
           <p class="text-zinc-500 text-lg">No projects found for this category.</p>
        </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SamaCategoryDetailComponent {
  private translationService = inject(TranslationService);
  private contentfulService = inject(ContentfulService);
  private route = inject(ActivatedRoute);

  private lang$ = toObservable(this.translationService.currentLang);
  private params$ = this.route.paramMap;

  pageConfig = toSignal(
    this.lang$.pipe(
      switchMap(lang => this.contentfulService.getSamaPortfolioPageConfig(lang))
    )
  );

  projects = toSignal(
    combineLatest([this.lang$, this.params$]).pipe(
      switchMap(([lang, params]) => {
        const categoryId = params.get('id') || undefined;
        return this.contentfulService.getSamaPortfolioProjects(lang, categoryId);
      })
    ),
    { initialValue: [] }
  );
}
