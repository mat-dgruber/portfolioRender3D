import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.html',
  styles: [`:host { display: block; }`]
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
  align = input<'left' | 'center' | 'right'>('center');
}
