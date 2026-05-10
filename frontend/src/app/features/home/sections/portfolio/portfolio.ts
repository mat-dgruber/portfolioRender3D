import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  src: string;
  thumb: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styles: [`:host { display: block; }`]
})
export class PortfolioComponent implements OnInit {
  private http = inject(HttpClient);
  
  items = signal<PortfolioItem[]>([]);
  categories = ['Todos', 'Interiores', 'Exteriores', 'Plantas Humanizadas', 'Animações'];
  activeFilter = signal('Todos');
  selectedImage = signal<PortfolioItem | null>(null);

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    const all = this.items();
    return filter === 'Todos' ? all : all.filter(item => item.category === filter);
  });

  ngOnInit() {
    this.http.get<PortfolioItem[]>('assets/data/portfolio.json').subscribe(data => {
      this.items.set(data);
    });
  }

  setFilter(category: string) {
    this.activeFilter.set(category);
  }

  openLightbox(item: PortfolioItem) {
    this.selectedImage.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage.set(null);
    document.body.style.overflow = 'auto';
  }
}
