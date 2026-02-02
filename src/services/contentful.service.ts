import { Injectable } from '@angular/core';
import { createClient, ContentfulClientApi } from 'contentful';
import { environment } from '../environments/environment';
import { from, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface AbaadPageConfig {
  pageTitle: string;
  labelOwner: string;
  labelLocation: string;
  labelSize: string;
  labelPrice: string;
  labelOfficeRole: string;
}

export interface AbaadCategory {
  sys: { id: string };
  title: string;
  coverImage: string;
}

export interface AbaadProject {
  title: string;
  coverImage: string; // URL
  ownerName: string;
  location: string;
  size: string;
  price: string;
  officeRole: string;
  officeRoleTemp: string;
  category?: { sys: { id: string } };
}

export interface SamaPortfolioPageConfig {
  pageTitle: string;
  labelOwner: string;
  labelLocation: string;
  labelSize: string;
  labelPrice: string;
}

export interface SamaPortfolioCategory {
  sys: { id: string };
  title: string;
  coverImage: string;
}

export interface SamaPortfolioProject {
  title: string;
  coverImage: string; // URL
  ownerName: string;
  location: string;
  size: string;
  price: string;
  category?: { sys: { id: string } };
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client: ContentfulClientApi<any>;

  constructor() {
    this.client = createClient({
      space: environment.contentful.spaceId,
      accessToken: environment.contentful.accessToken
    });
  }

  /**
   * Validates and normalizes locale values for Contentful API.
   * Defensive handling to prevent 'locale=*' errors during page reload.
   */
  private getContentfulLocale(locale: string | undefined): string {
    // Handle undefined, empty, or invalid locale values
    if (!locale || locale === '*' || locale === '' || typeof locale !== 'string') {
      return 'en-US';
    }

    // Normalize locale values
    const normalized = locale.toLowerCase();
    if (normalized === 'ar') {
      return 'ar';
    }
    if (normalized === 'en' || normalized === 'en-us' || normalized === 'enus') {
      return 'en-US';
    }

    // Default to en-US for any other value
    return 'en-US';
  }

  getAbaadPageConfig(locale: string = 'en-US'): Observable<AbaadPageConfig | null> {
    const contentfulLocale = this.getContentfulLocale(locale);

    return from(this.client.getEntries({
      content_type: 'samaProjectsPage',
      locale: contentfulLocale,
      include: 0,
      limit: 1
    } as any)).pipe(
      map(response => {
        if (response.items.length > 0) {
          const fields = response.items[0].fields as any;
          return {
            pageTitle: fields.pageTitle,
            labelOwner: fields.labelOwner,
            labelLocation: fields.labelLocation,
            labelSize: fields.labelSize,
            labelPrice: fields.labelPrice,
            labelOfficeRole: fields.labelOfficeRole
          };
        }
        return null;
      }),
      catchError(error => {
        console.error('Error fetching Abaad Page Config:', error);
        return of(null);
      })
    );
  }

  getAbaadCategories(locale: string = 'en-US'): Observable<AbaadCategory[]> {
    const contentfulLocale = this.getContentfulLocale(locale);

    return from(this.client.getEntries({
      content_type: 'samaCategory',
      locale: contentfulLocale,
      include: 2
    } as any)).pipe(
      map(response => {
        return response.items.map(item => {
          const fields = item.fields as any;
          let imageUrl = '';
          if (fields.coverImage && fields.coverImage.fields && fields.coverImage.fields.file) {
            imageUrl = fields.coverImage.fields.file.url;
            if (!imageUrl.startsWith('http')) {
              imageUrl = 'https:' + imageUrl;
            }
          }

          return {
            sys: item.sys,
            title: fields.title,
            coverImage: imageUrl
          };
        });
      }),
      catchError(error => {
        console.error('Error fetching Abaad Categories:', error);
        return of([]);
      })
    );
  }

  getAbaadProjects(locale: string = 'en-US', categoryId?: string): Observable<AbaadProject[]> {
    const contentfulLocale = this.getContentfulLocale(locale);

    const query: any = {
      content_type: 'samaProject',
      locale: contentfulLocale,
      include: 2
    };

    if (categoryId) {
      query['fields.category.sys.id'] = categoryId;
    }

    return from(this.client.getEntries(query)).pipe(
      map(response => {
        return response.items.map(item => {
          const fields = item.fields as any;
          // Handle image URL safely
          let imageUrl = '';
          if (fields.coverImage && fields.coverImage.fields && fields.coverImage.fields.file) {
            imageUrl = fields.coverImage.fields.file.url;
            if (!imageUrl.startsWith('http')) {
              imageUrl = 'https:' + imageUrl;
            }
          }

          return {
            title: fields.title,
            coverImage: imageUrl,
            ownerName: fields.ownerName,
            location: fields.location,
            size: fields.size,
            price: fields.price,
            officeRole: fields.officeRole,
            officeRoleTemp: fields.officeRoleTemp,
            category: fields.category
          };
        });
      }),
      catchError(error => {
        console.error('Error fetching Abaad Projects:', error);
        return of([]);
      })
    );
  }

  // SAMA PORTFOLIO METHODS

  getSamaPortfolioPageConfig(locale: string = 'en-US'): Observable<SamaPortfolioPageConfig | null> {
    const contentfulLocale = this.getContentfulLocale(locale);

    return from(this.client.getEntries({
      content_type: 'samaPortfolioPage',
      locale: contentfulLocale,
      include: 0,
      limit: 1
    } as any)).pipe(
      map(response => {
        if (response.items.length > 0) {
          const fields = response.items[0].fields as any;
          return {
            pageTitle: fields.pageTitle,
            labelOwner: fields.labelOwner,
            labelLocation: fields.labelLocation,
            labelSize: fields.labelSize,
            labelPrice: fields.labelPrice
          };
        }
        return null;
      }),
      catchError(error => {
        console.error('Error fetching Sama Portfolio Page Config:', error);
        return of(null);
      })
    );
  }

  getSamaPortfolioCategories(locale: string = 'en-US'): Observable<SamaPortfolioCategory[]> {
    const contentfulLocale = this.getContentfulLocale(locale);

    return from(this.client.getEntries({
      content_type: 'samaPortfolioCategory',
      locale: contentfulLocale,
      include: 2
    } as any)).pipe(
      map(response => {
        return response.items.map(item => {
          const fields = item.fields as any;
          let imageUrl = '';
          if (fields.coverImage && fields.coverImage.fields && fields.coverImage.fields.file) {
            imageUrl = fields.coverImage.fields.file.url;
            if (!imageUrl.startsWith('http')) {
              imageUrl = 'https:' + imageUrl;
            }
          }

          return {
            sys: item.sys,
            title: fields.title,
            coverImage: imageUrl
          };
        });
      }),
      catchError(error => {
        console.error('Error fetching Sama Portfolio Categories:', error);
        return of([]);
      })
    );
  }

  getSamaPortfolioProjects(locale: string = 'en-US', categoryId?: string): Observable<SamaPortfolioProject[]> {
    const contentfulLocale = this.getContentfulLocale(locale);

    const query: any = {
      content_type: 'samaPortfolioProject',
      locale: contentfulLocale,
      include: 2
    };

    if (categoryId) {
      query['fields.category.sys.id'] = categoryId;
    }

    return from(this.client.getEntries(query)).pipe(
      map(response => {
        return response.items.map(item => {
          const fields = item.fields as any;
          let imageUrl = '';
          if (fields.coverImage && fields.coverImage.fields && fields.coverImage.fields.file) {
            imageUrl = fields.coverImage.fields.file.url;
            if (!imageUrl.startsWith('http')) {
              imageUrl = 'https:' + imageUrl;
            }
          }

          return {
            title: fields.title,
            coverImage: imageUrl,
            ownerName: fields.ownerName,
            location: fields.location,
            size: fields.size,
            price: fields.price,
            category: fields.category
          };
        });
      }),
      catchError(error => {
        console.error('Error fetching Sama Portfolio Projects:', error);
        return of([]);
      })
    );
  }
}
