import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CarouselModule, SectionTitleComponent],
  templateUrl: './testimonials.html',
  styles: [`
    :host { display: block; }
    ::ng-deep .p-carousel-indicators {
      padding: 1rem;
    }
    ::ng-deep .p-carousel-indicator button {
      background-color: rgba(200, 169, 110, 0.2);
      width: 2rem;
      height: 4px;
      border-radius: 0;
      transition: all 0.3s ease;
    }
    ::ng-deep .p-carousel-indicator.p-highlight button {
      background-color: #c8a96e;
    }
  `]
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      name: 'Ricardo Silva',
      role: 'Arquiteto Sênior @ ArqLux',
      text: 'O nível de fotorrealismo é impressionante. Meus clientes agora conseguem visualizar exatamente como o projeto ficará, o que acelerou muito nosso processo de aprovação.',
      image: 'https://i.pravatar.cc/150?u=ricardo'
    },
    {
      name: 'Mariana Costa',
      role: 'Diretora de Marketing @ Construtora Horizon',
      text: 'Trabalhamos com o Studio Render em todos os nossos lançamentos. A qualidade das imagens e o compromisso com os prazos são diferenciais no mercado.',
      image: 'https://i.pravatar.cc/150?u=mariana'
    },
    {
      name: 'André Santos',
      role: 'Designer de Interiores',
      text: 'A atenção aos detalhes, desde a iluminação até as texturas, é o que torna o trabalho deles único. É um investimento que se paga logo na primeira apresentação.',
      image: 'https://i.pravatar.cc/150?u=andre'
    }
  ]);

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
