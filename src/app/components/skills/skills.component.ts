import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { name: string; percentage: number; color: string; }
interface TimelineEntry { title: string; date: string; company: string; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly activeTab = signal<'experience' | 'education'>('experience');

  readonly skills: Skill[] = [
    { name: 'HTML',                       percentage: 95, color: 'var(--primary)' },
    { name: 'CSS / SCSS',                 percentage: 90, color: '#ffc107' },
    { name: 'Javascript',                 percentage: 85, color: '#dc3545' },
    { name: 'Typescript',                 percentage: 90, color: '#dc3545' },
    { name: 'Angular',                    percentage: 95, color: '#dc3545' },
    { name: 'Ionic',                      percentage: 95, color: '#dc3545' },
    { name: 'Node / Feathers JS (Basics)', percentage: 80, color: '#0dcaf0' }
  ];

  readonly experience: TimelineEntry[] = [
    { title: 'Software Engineer', date: '2023 - Present', company: 'Supra Controls Pvt Ltd' },
    { title: 'Web Developer',     date: '2023 - 2023',    company: 'Coderzbot Innovations' },
    { title: 'Web Developer',     date: '2021 - 2023',    company: 'ViewZource Technologies' }
  ];

  readonly education: TimelineEntry[] = [
    { title: 'B.E - EEE', date: '2016 - 2020', company: 'Gnanamani College of Technology' },
    { title: 'HSC',     date: '2014 - 2016', company: 'A.S.S Matric Higher Secondary School' },
    { title: 'SSLC',    date: '2013 - 2014', company: 'M.D.V Matric Higher Secondary School' }
  ];

  setTab(tab: 'experience' | 'education'): void {
    this.activeTab.set(tab);
  }
}
