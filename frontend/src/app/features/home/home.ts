import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { ProblemComponent } from './sections/problem/problem';
import { BeforeAfterComponent } from './sections/before-after/before-after';
import { PortfolioComponent } from './sections/portfolio/portfolio';
import { ProcessComponent } from './sections/process/process';
import { FaqComponent } from './sections/faq/faq';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent, 
    ProblemComponent, 
    BeforeAfterComponent, 
    PortfolioComponent, 
    ProcessComponent, 
    FaqComponent, 
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-problem></app-problem>
    <app-before-after></app-before-after>
    <app-portfolio></app-portfolio>
    <app-process></app-process>
    <app-faq></app-faq>
    <app-contact></app-contact>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent {}
