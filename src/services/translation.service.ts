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

    // Track loaded modules
    private loadedModules = new Set<string>(['Home']);

    // Initialize translations - returns a Promise for APP_INITIALIZER
    async initTranslations(): Promise<void> {
        await this.loadModule('Home');
        this.updateDirection(this.currentLang());
    }

    toggleLanguage() {
        const newLang = this.currentLang() === 'EN' ? 'AR' : 'EN';
        this.setLanguage(newLang);
    }

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
        this.translations.set({}); // Clear current translations
        this.reloadAllModules();
        this.updateDirection(lang);
    }

    async loadModule(moduleName: string): Promise<void> {
        this.loadedModules.add(moduleName);
        await this.fetchAndMerge(moduleName, this.currentLang());
    }

    private async reloadAllModules() {
        const promises = Array.from(this.loadedModules).map(mod => 
            this.fetchAndMerge(mod, this.currentLang())
        );
        await Promise.all(promises);
    }

    private async fetchAndMerge(moduleName: string, lang: Language) {
        try {
            // Path construction: e.g., /assets/locale/EN/Home/home.json
            const path = `/assets/locale/${lang}/${moduleName}/${moduleName.toLowerCase()}.json`;
            
            const data = await firstValueFrom(
                this.http.get(path).pipe(
                    catchError(err => {
                        console.error(`Error loading translations for ${moduleName}`, err);
                        return of({});
                    })
                )
            );
            
            this.translations.update(current => ({ ...current, ...data }));
            this.loaded.set(true);
        } catch (err) {
            console.error(`Error loading translations for ${moduleName}`, err);
            // Don't reset loaded state here, just log
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

