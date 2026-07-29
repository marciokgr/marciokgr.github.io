import { Injectable, computed, signal } from '@angular/core';
import { AppContent, Lang, LangOption } from './types';
import { translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly languages: LangOption[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  private readonly langSignal = signal<Lang>(this.readInitialLang());

  readonly lang = this.langSignal.asReadonly();
  readonly t = computed<AppContent>(() => translations[this.langSignal()]);

  setLang(lang: Lang): void {
    if (this.langSignal() === lang) {
      return;
    }

    this.langSignal.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = this.htmlLang(lang);
  }

  private readInitialLang(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') {
      document.documentElement.lang = this.htmlLang(saved);
      return saved;
    }

    const browser = navigator.language.toLowerCase();
    const detected: Lang = browser.startsWith('es')
      ? 'es'
      : browser.startsWith('en')
        ? 'en'
        : 'pt';

    document.documentElement.lang = this.htmlLang(detected);
    return detected;
  }

  private htmlLang(lang: Lang): string {
    return lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
  }
}
