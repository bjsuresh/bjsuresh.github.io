import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  private readonly id = signal<string>(this.route.snapshot.paramMap.get('id') ?? '');
  readonly project = computed(() => this.projectsService.getById(this.id()));

  readonly lightboxIndex = signal<number | null>(null);

  openLightbox(i: number): void {
    this.lightboxIndex.set(i);
  }

  closeLightbox(): void {
    this.lightboxIndex.set(null);
  }

  prev(): void {
    const p = this.project();
    const i = this.lightboxIndex();
    if (!p || i === null) return;
    this.lightboxIndex.set((i - 1 + p.screenshots.length) % p.screenshots.length);
  }

  next(): void {
    const p = this.project();
    const i = this.lightboxIndex();
    if (!p || i === null) return;
    this.lightboxIndex.set((i + 1) % p.screenshots.length);
  }
}
