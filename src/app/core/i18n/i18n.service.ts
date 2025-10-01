import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Lang = 'en' | 'nl';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private langSig = signal<Lang>('en');
  private dictSig = signal<Record<string, string>>({});

  lang = computed(() => this.langSig());
  dict = computed(() => this.dictSig());

  constructor(private http: HttpClient) {
    this.load('nl');
  }

  async load(lang: Lang) {
    // 1) Reflect the new language immediately in the UI
    this.langSig.set(lang);

    try {
      // 2) No leading slash to play nice with <base href>
      const data = await firstValueFrom(
        this.http.get<Record<string, string>>(`assets/i18n/${lang}.json`)
      );
      this.dictSig.set(data ?? {});
    } catch (err) {
      console.error('i18n load failed for', lang, err);
      // 3) Fallback to empty dict so keys render as-is
      this.dictSig.set({});
    }
  }

  t(key: string): string {
    return this.dictSig()[key] ?? key;
  }
}