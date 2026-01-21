import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ContentfulService } from '../services/contentful.service';
import { TranslationService } from '../services/translation.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-abaad-category-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen py-32 bg-[#EFE7DD] overflow-hidden relative" dir="auto">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-12deg] origin-top opacity-100 -mr-20 z-0"></div>
      
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div *ngIf="!pageConfig()" class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A3728]"></div>
        </div>

        <!-- Main Content -->
        <div *ngIf="pageConfig() as config" class="max-w-7xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {{ config.pageTitle }}
          </h1>
          <div class="mt-4 max-w-2xl mx-auto h-1 bg-[#4A3728] rounded"></div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div *ngFor="let project of projects()" 
               class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden group">
              <img [src]="project.coverImage" 
                   [alt]="project.title"
                   class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
              
              <dl class="space-y-3 text-sm flex-1">
                <!-- Owner -->
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                  <dt class="font-medium text-gray-500">{{ config.labelOwner }}</dt>
                  <dd class="font-semibold text-gray-900">{{ project.ownerName }}</dd>
                </div>
                
                <!-- Location -->
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                  <dt class="font-medium text-gray-500">{{ config.labelLocation }}</dt>
                  <dd class="font-semibold text-gray-900">{{ project.location }}</dd>
                </div>

                <!-- Size -->
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                  <dt class="font-medium text-gray-500">{{ config.labelSize }}</dt>
                  <dd class="font-semibold text-gray-900">{{ project.size }}</dd>
                </div>

                <!-- Price -->
                <div class="flex justify-between items-center pt-1">
                  <dt class="font-medium text-gray-500">{{ config.labelPrice }}</dt>
                  <dd class="font-bold text-[#4A3728] text-lg">{{ project.price }}</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>

        <!-- Empty State -->
        <div *ngIf="projects().length === 0" class="text-center py-12">
           <p class="text-gray-500 text-lg">No projects found for this category.</p>
        </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AbaadCategoryDetailComponent {
  private translationService = inject(TranslationService);
  private contentfulService = inject(ContentfulService);
  private route = inject(ActivatedRoute);

  private lang$ = toObservable(this.translationService.currentLang);
  private params$ = this.route.paramMap;

  pageConfig = toSignal(
    this.lang$.pipe(
      switchMap(lang => this.contentfulService.getAbaadPageConfig(lang))
    )
  );

  projects = toSignal(
    combineLatest([this.lang$, this.params$]).pipe(
      switchMap(([lang, params]) => {
        const categoryId = params.get('id') || undefined;
        return this.contentfulService.getAbaadProjects(lang, categoryId);
      })
    ),
    { initialValue: [] }
  );
}