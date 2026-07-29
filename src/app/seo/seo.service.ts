import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { translations } from '../i18n/translations';
import { LANG_PREFIX, SITE_URL, buildPath } from '../i18n/routing';
import { Lang } from '../i18n/types';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  update(lang: Lang): void {
    const content = translations[lang];
    const seo = content.seo.home;
    const url = `${SITE_URL}${buildPath(lang, 'home')}`;

    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });

    this.setCanonical(url);
    this.setHreflang();
    this.setHtmlLang(lang);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setHreflang(): void {
    this.document
      .querySelectorAll("link[rel='alternate'][hreflang]")
      .forEach((node) => node.remove());

    const langs: Array<{ hreflang: string; lang: Lang }> = [
      { hreflang: 'pt-BR', lang: 'pt' },
      { hreflang: 'en', lang: 'en' },
      { hreflang: 'es', lang: 'es' },
      { hreflang: 'x-default', lang: 'pt' },
    ];

    langs.forEach(({ hreflang, lang }) => {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', `${SITE_URL}${buildPath(lang, 'home')}`);
      this.document.head.appendChild(link);
    });
  }

  private setHtmlLang(lang: Lang): void {
    this.document.documentElement.lang =
      lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
  }

  prefix(lang: Lang): string {
    return LANG_PREFIX[lang];
  }
}
