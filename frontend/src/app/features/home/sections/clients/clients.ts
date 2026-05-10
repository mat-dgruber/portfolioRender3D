import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 bg-brand-bg/50 border-y border-white/5 overflow-hidden">
      <div class="container mx-auto px-6">
        <p class="text-center text-brand-muted text-[10px] uppercase tracking-[0.4em] mb-16">Marcas que elevam seus projetos conosco</p>
        
        <div class="relative flex overflow-x-hidden">
          <div class="py-12 animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32">
            <span *ngFor="let client of clients" class="text-2xl md:text-4xl font-light tracking-tighter text-brand-text/30 hover:text-brand-accent transition-colors cursor-default">
              {{ client }}
            </span>
            <!-- Duplicate for seamless loop -->
            <span *ngFor="let client of clients" class="text-2xl md:text-4xl font-light tracking-tighter text-brand-text/30 hover:text-brand-accent transition-colors cursor-default">
              {{ client }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
  `]
})
export class ClientsComponent {
  clients = [
    'ARCHI+BUILD',
    'LUXURY HOMES',
    'URBAN DESIGN',
    'VISTA REALTY',
    'MODERN LOFT',
    'SKYLINE INC'
  ];
}
