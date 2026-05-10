import { Component } from '@angular/core';

import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './problem.html',
  styles: [`:host { display: block; }`]
})
export class ProblemComponent {}
