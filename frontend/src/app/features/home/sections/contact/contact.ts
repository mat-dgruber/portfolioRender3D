import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent],
  templateUrl: './contact.html',
  styles: [`:host { display: block; }`]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  
  loading = signal(false);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    type: ['interiores'],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading.set(true);
      // Simulating API call
      setTimeout(() => {
        console.log('Form data:', this.contactForm.value);
        this.loading.set(false);
        this.contactForm.reset({ type: 'interiores' });
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      }, 1500);
    }
  }
}
