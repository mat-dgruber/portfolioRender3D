import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallax-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="relative w-full overflow-hidden flex items-center justify-center"
      [style.height]="height"
    >
      <div 
        class="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover transition-transform duration-500"
        [style.backgroundImage]="'url(' + imageUrl + ')'"
      >
        <!-- Overlay for better text readability or depth -->
        <div class="absolute inset-0 bg-brand-bg/20"></div>
      </div>
      
      <div class="relative z-10 text-center px-6">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    
    /* Fallback for mobile devices that don't support bg-fixed well */
    @media (max-width: 1024px) {
      .bg-fixed {
        background-attachment: scroll;
      }
    }
  `]
})
export class ParallaxSectionComponent {
  @Input() imageUrl: string = '';
  @Input() height: string = '60vh';
}
