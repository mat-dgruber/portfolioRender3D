import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { ProblemComponent } from './sections/problem/problem';
import { BeforeAfterComponent } from './sections/before-after/before-after';
import { PortfolioComponent } from './sections/portfolio/portfolio';
import { ServicesComponent } from './sections/services/services';
import { MethodologyComponent } from './sections/methodology/methodology';
import { ClientsComponent } from './sections/clients/clients';
import { FaqComponent } from './sections/faq/faq';
import { TestimonialsComponent } from './sections/testimonials/testimonials';
import { ParallaxSectionComponent } from '../../shared/components/parallax-section/parallax-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent, 
    ProblemComponent, 
    BeforeAfterComponent, 
    PortfolioComponent, 
    ServicesComponent,
    MethodologyComponent,
    ClientsComponent,
    ParallaxSectionComponent,
    FaqComponent,
    TestimonialsComponent
  ],
  template: `
    <app-hero id="hero"></app-hero>
    
    <app-problem></app-problem>

    <app-portfolio id="portfolio"></app-portfolio>

    <app-parallax-section imageUrl="assets/images/parallax/exterior.png" height="50vh">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-light text-white tracking-tighter mb-4 shadow-text">O fotorrealismo que o seu projeto merece.</h2>
        <p class="text-white/80 text-lg tracking-widest uppercase">Excelência em cada detalhe.</p>
      </div>
    </app-parallax-section>

    <app-methodology id="metodologia"></app-methodology>

    <app-services id="servicos"></app-services>
    
    <!-- Transformação Parallax Context -->
    <app-parallax-section imageUrl="assets/images/parallax/interior.png" height="50vh">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-light text-white tracking-tighter mb-4 shadow-text">A ponte entre o sonho e a realidade.</h2>
        <p class="text-white/80 text-lg tracking-widest uppercase">Transformação total em 3D.</p>
      </div>
    </app-parallax-section>

    <app-before-after></app-before-after>
    
    <app-clients></app-clients>
    
    <app-parallax-section imageUrl="assets/images/parallax/exterior.png" height="40vh">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-light text-white tracking-tighter shadow-text">Pronto para elevar o nível da sua apresentação?</h2>
      </div>
    </app-parallax-section>

    <app-testimonials></app-testimonials>
    <app-faq id="faq"></app-faq>

    <app-parallax-section imageUrl="assets/images/parallax/luxury-detail.png" height="50vh">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-light text-white tracking-tighter shadow-text">Sua visão, nossa maestria técnica.</h2>
        <p class="text-white/80 text-lg tracking-widest uppercase mt-4">Excelência que transforma resultados.</p>
      </div>
    </app-parallax-section>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent {}
