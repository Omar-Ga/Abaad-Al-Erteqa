import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ContentfulService } from '../services/contentful.service';
import { TranslationService } from '../services/translation.service';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-abaad-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  template: `
    <section class="min-h-screen py-32 bg-[#EFE7DD] overflow-hidden relative" dir="auto">
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-12deg] origin-top opacity-100 -mr-20 z-0"></div>
      
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
             {{ 'HOME.NAV.ABAAD_PROJECTS' | translate }}
          </h1>
          <div class="mt-4 max-w-2xl mx-auto h-1 bg-[#4A3728] rounded"></div>
        </div>

        <!-- Categories Grid -->
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div *ngFor="let category of categories()" 
               [routerLink]="['/projects/abaad', category.sys.id]"
               class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
            
            <!-- Background Image -->
            <img [src]="category.coverImage" 
                 [alt]="category.title"
                 class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            <!-- Content -->
            <div class="absolute inset-0 flex flex-col justify-end p-8">
              <h2 class="text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {{ category.title }}
              </h2>
              <div class="w-16 h-1 bg-[#4A3728] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>

        </div>

        <!-- Loading State -->
        <div *ngIf="categories().length === 0" class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A3728]"></div>
        </div>
      </div>

    </section>
  `,
  styles: []
})
export class AbaadCategoriesComponent {
  private translationService = inject(TranslationService);
  private contentfulService = inject(ContentfulService);

  private lang$ = toObservable(this.translationService.currentLang);

  categories = toSignal(
    this.lang$.pipe(
      switchMap(lang => this.contentfulService.getAbaadCategories(lang))
    ),
    { initialValue: [] }
  );
}
