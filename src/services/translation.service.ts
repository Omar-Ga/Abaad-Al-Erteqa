import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

export type Language = 'EN' | 'AR';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private http = inject(HttpClient);

    // Current language signal
    currentLang = signal<Language>('AR');

    // Loaded translations signal
    private translations = signal<any>({});

    // Flag to track if translations are loaded
    private loaded = signal(false);

    isLoaded = this.loaded.asReadonly();

    // Initialize translations - returns a Promise for APP_INITIALIZER
    async initTranslations(): Promise<void> {
        await this.loadTranslations(this.currentLang());
        this.updateDirection(this.currentLang());
    }

    toggleLanguage() {
        const newLang = this.currentLang() === 'EN' ? 'AR' : 'EN';
        this.setLanguage(newLang);
    }

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
        this.loadTranslations(lang);
        this.updateDirection(lang);
    }

    private async loadTranslations(lang: Language): Promise<void> {
        try {
            const data = await firstValueFrom(
                this.http.get(`/assets/locale/${lang}/Home/home.json`).pipe(
                    catchError(err => {
                        console.error('Error loading translations', err);
                        return of({});
                    })
                )
            );
            this.translations.set(data);
            this.loaded.set(true);
        } catch (err) {
            console.error('Error loading translations', err);
            this.translations.set({});
            this.loaded.set(true);
        }
    }

    private updateDirection(lang: Language) {
        const dir = lang === 'AR' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang.toLowerCase();
    }

    translate(key: string): string {
        const keys = key.split('.');
        let value = this.translations();
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        return value || key;
    }
}

