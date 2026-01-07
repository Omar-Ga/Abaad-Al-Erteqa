
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LucideAngularModule, Zap, ShieldCheck, Cpu, Clock } from 'lucide-angular';


@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule, TranslatePipe, LucideAngularModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          @for (value of values; track value.key) {
            <div class="flex flex-col items-start group">
              <div class="mb-4 text-[#4A3728] group-hover:scale-110 transition-transform duration-300">
                <lucide-icon [name]="value.icon" [size]="32" [strokeWidth]="1.5"></lucide-icon>
              </div>
              <h4 class="text-lg font-bold text-[#1A1A1A] mb-2">{{ 'HOME.VALUES.' + value.key + '.TITLE' | translate }}</h4>
              <p class="text-sm text-[#4A4A4A] leading-relaxed">
                {{ 'HOME.VALUES.' + value.key + '.DESC' | translate }}
              </p>
            </div>
          }

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuesComponent {
  values = [
    { icon: 'zap', key: 'VAL1' },
    { icon: 'shield-check', key: 'VAL2' },
    { icon: 'cpu', key: 'VAL3' },
    { icon: 'clock', key: 'VAL4' },
  ];
}
