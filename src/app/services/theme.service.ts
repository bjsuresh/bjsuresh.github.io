import { Injectable, signal } from '@angular/core';

export interface ThemeOption {
  id: string;
  name: string;
  gradient: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly themes: ThemeOption[] = [
    { id: 'light',     name: 'Light',         gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
    { id: 'dark',      name: 'Dark',          gradient: 'linear-gradient(135deg, #818cf8, #a78bfa)' },
    { id: 'ocean',     name: 'Ocean Blue',    gradient: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' },
    { id: 'forest',    name: 'Forest Green',  gradient: 'linear-gradient(135deg, #22c55e, #10b981)' },
    { id: 'sunset',    name: 'Sunset Orange', gradient: 'linear-gradient(135deg, #f97316, #fb923c)' },
    { id: 'violet',    name: 'Violet',        gradient: 'linear-gradient(135deg, #a855f7, #c084fc)' },
    { id: 'rose',      name: 'Rose Pink',     gradient: 'linear-gradient(135deg, #ec4899, #f472b6)' },
    { id: 'cyberpunk', name: 'Cyberpunk',     gradient: 'linear-gradient(135deg, #ff00ff, #00ffff)' }
  ];

  private readonly STORAGE_KEY = 'theme';
  readonly current = signal<string>('light');

  constructor() {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem(this.STORAGE_KEY)) || 'light';
    this.setTheme(saved);
  }

  setTheme(id: string): void {
    const valid = this.themes.find(t => t.id === id) ? id : 'light';
    this.current.set(valid);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', valid);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, valid);
    }
  }

  get currentName(): string {
    return this.themes.find(t => t.id === this.current())?.name ?? 'Light';
  }
}
