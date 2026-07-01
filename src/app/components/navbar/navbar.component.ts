import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);
  readonly mobileOpen = signal(false);
  readonly dropdownOpen = signal(false);

  readonly navItems = [
    { fragment: 'home',       label: 'Home' },
    { fragment: 'about',      label: 'About' },
    { fragment: 'skills',     label: 'Skills' },
    { fragment: 'experience', label: 'Experience' },
    { fragment: 'projects',   label: 'Projects' },
    { fragment: 'contact',    label: 'Contact' }
  ];

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.dropdownOpen.update(v => !v);
  }

  selectTheme(id: string): void {
    this.themeService.setTheme(id);
    this.dropdownOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-selector')) {
      this.dropdownOpen.set(false);
    }
  }

  navigate(event: Event, fragment: string): void {
    event.preventDefault();
    this.closeMobile();

    if (this.router.url.split('#')[0] === '/') {
      const el = document.getElementById(fragment);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/'], { fragment });
    }
  }
}
