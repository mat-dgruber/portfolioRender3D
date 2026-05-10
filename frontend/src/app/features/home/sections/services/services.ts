import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="servicos" class="py-32 bg-brand-bg overflow-hidden">
      <div class="container mx-auto px-6">
        <app-section-title 
          title="Nossos Serviços" 
          subtitle="Soluções completas em visualização 3D para transformar seus projetos em realidade."
          class="mb-20 text-center"
        ></app-section-title>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div 
            *ngFor="let service of services; let i = index"
            class="group relative flex flex-col md:flex-row gap-8 items-center bg-brand-surface/30 p-8 rounded-3xl border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
          >
            <div class="w-full md:w-1/2 aspect-square overflow-hidden rounded-3xl">
              <img 
                [src]="service.image" 
                [alt]="service.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div class="w-full md:w-1/2">
              <h3 class="text-2xl font-light text-brand-text mb-4 group-hover:text-brand-accent transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-brand-muted text-sm leading-relaxed mb-6">
                {{ service.description }}
              </p>
              <ul class="space-y-2">
                <li *ngFor="let feature of service.features" class="flex items-center gap-3 text-xs text-brand-text/70">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'ArchViz (Renders 3D)',
      description: 'Imagens fotorrealistas de alta qualidade para apresentações impactantes e vendas antecipadas.',
      image: 'assets/images/services/archviz.png',
      features: ['Iluminação Global Avançada', 'Materiais Realistas', 'Pós-produção Cinematográfica']
    },
    {
      title: 'Realidade Virtual',
      description: 'Experiências imersivas que permitem ao cliente caminhar pelo projeto antes da obra começar.',
      image: 'assets/images/services/vr.png',
      features: ['Tours 360º', 'Interatividade', 'Compatibilidade VR']
    },
    {
      title: 'Animações 3D',
      description: 'Vídeos cinematográficos que contam a história do projeto e emocionam os investidores.',
      image: 'assets/images/portfolio/animation-still.png',
      features: ['Câmera Dinâmica', 'Sound Design', 'Storytelling Visual']
    },
    {
      title: 'Plantas Humanizadas',
      description: 'Visualização técnica e estética de layouts internos para melhor compreensão espacial.',
      image: 'assets/images/portfolio/plan-humanized.png',
      features: ['Design de Interiores', 'Escala Precisa', 'Texturização Detalhada']
    }
  ];
}
