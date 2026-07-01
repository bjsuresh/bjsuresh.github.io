import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly texts = [
    'Full Stack Developer',
    'Front End Developer',
    'Mobile App Developer',
    'Web Developer'
  ];

  readonly typed = signal('');
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private type(): void {
    const current = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.typed.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.typed.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      this.isDeleting = true;
      delay = 2000;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      delay = 500;
    }

    this.timer = setTimeout(() => this.type(), delay);
  }

  smoothScroll(event: Event, href: string): void {
    event.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
