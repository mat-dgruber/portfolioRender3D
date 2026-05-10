import { Component, signal, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-before-after',
  standalone: true,
  templateUrl: './before-after.html',
  styles: [`
    :host { display: block; }
    input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 48px;
      height: 48px;
    }
  `]
})
export class BeforeAfterComponent {
  position = signal(50);

  onMove(event: MouseEvent | TouchEvent) {
    const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const relativeX = x - container.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / container.width) * 100));
    this.position.set(percentage);
  }

  onInputChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.position.set(Number(val));
  }
}
