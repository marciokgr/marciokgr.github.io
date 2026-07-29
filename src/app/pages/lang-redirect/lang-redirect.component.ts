import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { buildPath } from '../../i18n/routing';

@Component({
  selector: 'app-lang-redirect',
  standalone: true,
  template: '',
})
export class LangRedirectComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    const lang = isPlatformBrowser(this.platformId)
      ? this.i18n.detectBrowserLang()
      : 'pt';
    void this.router.navigateByUrl(buildPath(lang, 'home'), { replaceUrl: true });
  }
}
