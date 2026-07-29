import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { LANG_PREFIX } from './routing';
import { AppContent, Lang, LangOption } from './types';
import { translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly languages: LangOption[] = [
    { code: 'pt', label: 'PT', prefix: LANG_PREFIX.pt },
    { code: 'en', label: 'EN', prefix: LANG_PREFIX.en },
    { code: 'es', label: 'ES', prefix: LANG_PREFIX.es },
  ];

  private readonly langSignal = signal<Lang>('pt');

  readonly lang = this.langSignal.asReadonly();
  readonly t = computed<AppContent>(() => translations[this.langSignal()]);

  setLang(lang: Lang): void {
    this.langSignal.set(lang);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = this.htmlLang(lang);
  }

  detectBrowserLang(): Lang {
    if (!isPlatformBrowser(this.platformId)) {
      return 'pt';
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') {
      return saved;
    }

    const browser = navigator.language.toLowerCase();
    if (browser.startsWith('es')) {
      return 'es';
    }
    if (browser.startsWith('en')) {
      return 'en';
    }
    return 'pt';
  }

  htmlLang(lang: Lang): string {
    return lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
  }
}
