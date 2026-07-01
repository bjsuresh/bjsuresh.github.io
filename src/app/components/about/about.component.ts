import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature { text: string; }
interface QuickFact { icon: string; title: string; description: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly features: Feature[] = [
    { text: 'Implemented websites, mobile applications, and landing pages from concept through deployment' },
    { text: 'Standardized output with responsive, mobile-first approach using Angular, Ionic, and Vue.js' },
    { text: 'Delivered high-quality products with excellent code standards and best practices' },
    { text: 'Consistently meet project deadlines with efficient project management' }
  ];

  readonly quickFacts: QuickFact[] = [
    { icon: 'fa-graduation-cap', title: 'Education', description: 'B.E. from Gnanamani College of Technology (2016-2020)' },
    { icon: 'fa-map-marker-alt',  title: 'Location',  description: 'Namakkal, Tamil Nadu, India' },
    { icon: 'fa-code',            title: 'Specialization', description: 'Web & Mobile Application Development' },
    { icon: 'fa-rocket',          title: 'Current Role',   description: 'Software Engineer at Supra Controls Pvt Ltd' }
  ];
}
