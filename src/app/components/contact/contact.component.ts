import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InfoCard { icon: string; title: string; description: string; }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly socialLinks = [
    { icon: 'fa-linkedin-in', href: '#' },
    { icon: 'fa-github',      href: '#' },
    { icon: 'fa-twitter',     href: '#' },
    { icon: 'fa-instagram',   href: '#' }
  ];

  readonly messageCards: InfoCard[] = [
    { icon: 'fa-clock',       title: 'Availability',  description: 'Available for freelance projects and full-time opportunities' },
    { icon: 'fa-code-branch', title: 'Collaboration', description: 'Open to remote work and on-site projects' },
    { icon: 'fa-comments',    title: 'Response Time', description: 'I typically respond within 24 hours' }
  ];
}
