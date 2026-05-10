import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule, SectionTitleComponent],
  templateUrl: './faq.html',
  styles: [`
    :host { display: block; }
    ::ng-deep .p-accordion-panel {
      background: rgba(255, 255, 255, 0.03) !important;
      border: 1px solid rgba(255, 255, 255, 0.05) !important;
      border-radius: 1.5rem !important;
      margin-bottom: 1rem !important;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    ::ng-deep .p-accordion-panel:hover {
      border-color: rgba(200, 169, 110, 0.3) !important;
      background: rgba(255, 255, 255, 0.05) !important;
    }
    ::ng-deep .p-accordionheader {
      background: transparent !important;
      border: none !important;
      color: #f0f0f0 !important;
      padding: 1.5rem !important;
      box-shadow: none !important;
    }
    ::ng-deep .p-accordionheader:hover {
      color: #c8a96e !important;
    }
    ::ng-deep .p-accordioncontent-content {
      background: transparent !important;
      border: none !important;
      color: #888888 !important;
      padding: 0 1.5rem 1.5rem 1.5rem !important;
    }
  `]
})
export class FaqComponent {}
