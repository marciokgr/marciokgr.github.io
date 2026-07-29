import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  HostListener,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CvPdfService } from '../../cv/cv-pdf.service';
import { I18nService } from '../../i18n/i18n.service';
import {
  SectionKey,
  buildCommands,
  buildPath,
  langFromPrefix,
  sectionFromDomId,
  sectionFromSlug,
} from '../../i18n/routing';
import { Lang } from '../../i18n/types';
import { SeoService } from '../../seo/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);
  private readonly seo = inject(SeoService);
  private readonly cvPdf = inject(CvPdfService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly languages = this.i18n.languages;
  readonly year = new Date().getFullYear();
  menuOpen = false;
  showBackToTop = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.applyLangFromUrl();
        this.scrollFromUrl();
      });
  }

  ngAfterViewInit(): void {
    this.applyLangFromUrl();
    this.scrollFromUrl();
    this.updateBackToTopVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateBackToTopVisibility();
  }

  sectionHref(domId: string): string {
    return buildPath(this.lang(), sectionFromDomId(domId));
  }

  setLang(lang: Lang): void {
    const section = this.currentSection();
    void this.router.navigate(buildCommands(lang, section));
    this.closeMenu();
  }

  goToSection(event: Event, domId: string): void {
    event.preventDefault();
    this.closeMenu();
    const section = sectionFromDomId(domId);
    void this.router.navigate(buildCommands(this.lang(), section)).then(() => {
      if (section === 'home') {
        this.scrollToId('topo');
      }
    });
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  downloadCv(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.cvPdf.download(this.t(), this.lang());
  }

  private currentSection(): SectionKey {
    const parts = this.router.url.split('?')[0].split('#')[0].split('/').filter(Boolean);
    const lang = langFromPrefix(parts[0] ?? null) ?? this.lang();
    return sectionFromSlug(lang, parts[1] ?? null);
  }

  private updateBackToTopVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.showBackToTop = false;
      return;
    }

    this.showBackToTop = window.scrollY > 320;
  }

  private applyLangFromUrl(): void {
    const parts = this.router.url.split('?')[0].split('#')[0].split('/').filter(Boolean);
    const lang = langFromPrefix(parts[0] ?? null);

    if (!lang) {
      void this.router.navigateByUrl('/pt-br', { replaceUrl: true });
      return;
    }

    // slug inválido → volta para home do idioma
    if (parts[1] && sectionFromSlug(lang, parts[1]) === 'home') {
      void this.router.navigate(buildCommands(lang, 'home'), { replaceUrl: true });
      return;
    }

    this.i18n.setLang(lang);
    this.seo.update(lang);
  }

  private scrollFromUrl(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      this.scrollToId(hash);
      return;
    }

    const section = this.currentSection();
    if (section === 'home') {
      return;
    }

    this.scrollToId(section);
  }

  private scrollToId(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    requestAnimationFrame(() => {
      window.setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (!element) {
          return;
        }

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 40);
    });
  }
}
