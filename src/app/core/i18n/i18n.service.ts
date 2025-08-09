import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Lang = 'en' | 'nl';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private langSig = signal<Lang>('en');
  private dictSig = signal<Record<string, string>>({});

  lang = computed(() => this.langSig());
  dict = computed(() => this.dictSig());

  constructor(private http: HttpClient) {
    this.load('en');
  }

  async load(lang: Lang) {
    const data = await this.http.get<Record<string, string>>(`/assets/i18n/${lang}.json`).toPromise();
    this.langSig.set(lang);
    this.dictSig.set(data ?? {});
  }

  t(key: string): string {
    return this.dictSig()[key] ?? key;
  }
}