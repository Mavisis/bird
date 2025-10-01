import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { I18nService, Lang } from '../../core/i18n/i18n.service';

const STORAGE_KEY = 'lang';

@Component({
  selector: 'app-translate-button',
  imports: [CommonModule],
  templateUrl: './translate-button.html',
  styleUrl: './translate-button.scss'
})


export class TranslateButton {
  private i18n = inject(I18nService);

  // Current language from service
  currentLang = this.i18n.lang;

  // Next language to switch to
  nextLang = computed<Lang>(() => (this.currentLang() === 'en' ? 'nl' : 'en'));

  // Trigger the service to switch
  toggle() {
    this.i18n.load(this.nextLang());
  }
}
