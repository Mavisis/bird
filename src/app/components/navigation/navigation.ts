import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService, Lang } from '../../core/i18n/i18n.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
  
})
export class Navigation {

  constructor(public i18n: I18nService) {}
  toggleLanguage() {
    const next: Lang = this.i18n.lang() === 'nl' ? 'en' : 'nl';
    this.i18n.load(next);
  }

}
