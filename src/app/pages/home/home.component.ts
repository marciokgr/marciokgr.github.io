import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  PLATFORM_ID,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { I18nService } from '../../i18n/i18n.service';
import {
  SectionKey,
  buildPath,
  langFromPrefix,
  sectionFromSlug,
} from '../../i18n/routing';
import { Lang } from '../../i18n/types';
import { SeoService } from '../../seo/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);
  private readonly seo = inject(SeoService);
  private readonly scroller = inject(ViewportScroller);
  private readonly platformId = inject(PLATFORM_ID);

  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly languages = this.i18n.languages;
  readonly year = new Date().getFullYear();
  menuOpen = false;

  private readonly routeState = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const prefix = params.get('lang');
        const lang = langFromPrefix(prefix);
        if (!lang) {
          return {
            lang: 'pt' as Lang,
            section: 'home' as SectionKey,
            invalid: true,
          };
        }

        return {
          lang,
          section: sectionFromSlug(lang, params.get('section')),
          invalid: false,
        };
      })
    ),
    {
      initialValue: {
        lang: 'pt' as Lang,
        section: 'home' as SectionKey,
        invalid: false,
      },
    }
  );

  constructor() {
    effect(() => {
      const { lang, section, invalid } = this.routeState();
      if (invalid) {
        void this.router.navigateByUrl('/pt-br', { replaceUrl: true });
        return;
      }

      this.i18n.setLang(lang);
      this.seo.update(lang, section);
      this.scrollToSection(section);
    });
  }

  ngAfterViewInit(): void {
    const { section } = this.routeState();
    this.scrollToSection(section);
  }

  path(section: SectionKey, lang: Lang = this.lang()): string {
    return buildPath(lang, section);
  }

  setLang(lang: Lang): void {
    const currentSection = this.routeState().section;
    void this.router.navigateByUrl(buildPath(lang, currentSection));
    this.closeMenu();
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private scrollToSection(section: SectionKey): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const anchor = section === 'home' ? 'topo' : section;
    queueMicrotask(() => {
      this.scroller.scrollToAnchor(anchor);
    });
  }
}
