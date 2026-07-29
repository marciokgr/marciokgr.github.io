import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { I18nService } from '../../i18n/i18n.service';
import { LANG_PREFIX, buildCommands, langFromPrefix } from '../../i18n/routing';
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
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly languages = this.i18n.languages;
  readonly year = new Date().getFullYear();
  menuOpen = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.applyLangFromUrl();
        this.scrollToHash();
      });
  }

  ngAfterViewInit(): void {
    this.applyLangFromUrl();
    this.scrollToHash();
  }

  setLang(lang: Lang): void {
    void this.router.navigate(buildCommands(lang, 'home'));
    this.closeMenu();
  }

  goToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMenu();
    this.scrollToId(sectionId, true);
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private applyLangFromUrl(): void {
    const parts = this.router.url.split('?')[0].split('#')[0].split('/').filter(Boolean);
    const lang = langFromPrefix(parts[0] ?? null);

    if (!lang) {
      void this.router.navigateByUrl('/pt-br', { replaceUrl: true });
      return;
    }

    this.i18n.setLang(lang);
    this.seo.update(lang);
  }

  private scrollToHash(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      return;
    }

    this.scrollToId(hash, false);
  }

  private scrollToId(sectionId: string, updateHash: boolean): void {
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

        if (updateHash) {
          const prefix = LANG_PREFIX[this.lang()];
          history.replaceState(null, '', `/${prefix}#${sectionId}`);
        }
      }, 40);
    });
  }
}
