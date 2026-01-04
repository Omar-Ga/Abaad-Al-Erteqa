import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

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

    constructor() {
        this.loadTranslations(this.currentLang());
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

    private loadTranslations(lang: Language) {
        console.log(`Attempting to load translations for ${lang} from /assets/locale/${lang}/Home/home.json`);
        this.http.get(`/assets/locale/${lang}/Home/home.json`).pipe(
            tap(data => {
                console.log('Translations loaded successfully:', data);
                this.translations.set(data);
            }),
            catchError(err => {
                console.error('Error loading translations', err);
                return of({});
            })
        ).subscribe();
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
