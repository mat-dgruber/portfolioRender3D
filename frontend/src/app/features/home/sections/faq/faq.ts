import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './faq.html',
  styles: [`
    :host { display: block; }
    ::ng-deep .p-accordionheader {
      background: transparent !important;
      border: none !important;
      border-bottom: 1px solid rgba(200, 169, 110, 0.2) !important;
      color: #f0f0f0 !important;
      padding: 1.5rem 0 !important;
      box-shadow: none !important;
      transition: all 0.3s ease;
    }
    ::ng-deep .p-accordionheader:hover {
      color: #c8a96e !important;
    }
    ::ng-deep .p-accordioncontent-content {
      background: transparent !important;
      border: none !important;
      color: #888888 !important;
      padding: 0 !important;
    }
  `]
})
export class FaqComponent {}
