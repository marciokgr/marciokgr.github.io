import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from './i18n/i18n.service';
import { Lang } from './i18n/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly i18n = inject(I18nService);

  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly languages = this.i18n.languages;
  readonly year = new Date().getFullYear();
  menuOpen = false;

  setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
