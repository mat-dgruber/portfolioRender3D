import { Component } from '@angular/core';

import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './process.html',
  styles: [`:host { display: block; }`]
})
export class ProcessComponent {}
