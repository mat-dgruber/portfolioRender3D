import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="metodologia" class="py-32 bg-brand-surface/20">
      <div class="container mx-auto px-6">
        <app-section-title 
          title="Nossa Metodologia" 
          subtitle="Um processo estruturado para garantir a máxima fidelidade e qualidade em cada projeto."
          class="mb-20 text-center"
        ></app-section-title>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div 
            *ngFor="let step of steps"
            class="relative group p-10 bg-brand-surface rounded-3xl border border-white/5 hover:bg-brand-accent/5 hover:border-brand-accent/20 transition-all duration-500"
          >
            <div class="text-5xl font-bold text-white/5 absolute top-6 right-8 group-hover:text-brand-accent/20 transition-colors">
              {{ step.number }}
            </div>
            <div class="w-12 h-1 rounded-full bg-brand-accent mb-8"></div>
            <h3 class="text-xl font-light text-brand-text mb-4">{{ step.title }}</h3>
            <p class="text-brand-muted text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class MethodologyComponent {
  steps: Step[] = [
    {
      number: '01',
      title: 'Briefing & Referências',
      description: 'Entendemos a essência do projeto, materiais, iluminação desejada e o público-alvo.'
    },
    {
      number: '02',
      title: 'Modelagem 3D',
      description: 'Construímos a geometria detalhada do projeto seguindo fielmente as plantas técnicas.'
    },
    {
      number: '03',
      title: 'Texturização & Luz',
      description: 'Aplicamos materiais realistas e configuramos a iluminação para criar a atmosfera perfeita.'
    },
    {
      number: '04',
      title: 'Renderização',
      description: 'Processamento das imagens em alta definição usando os motores mais avançados do mercado.'
    },
    {
      number: '05',
      title: 'Pós-Produção',
      description: 'Ajustes finos de cores, contraste e inserção de elementos que dão vida à imagem.'
    },
    {
      number: '06',
      title: 'Entrega Final',
      description: 'Envio dos arquivos em máxima resolução prontos para marketing e apresentações.'
    }
  ];
}
