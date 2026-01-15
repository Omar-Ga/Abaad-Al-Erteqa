
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe],
  template: `
   
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent { }
