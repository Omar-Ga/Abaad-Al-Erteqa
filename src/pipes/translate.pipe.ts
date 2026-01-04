import { Pipe, PipeTransform, inject, Signal } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false // Impure to trigger updates when signal changes deeply if needed, 
    // but since we read a signal, pure: false tells Angular to check it more often. 
    // Actually with signals, pure: true might work if we inject signal properly, 
    // but standard pipe practice for async data often uses pure:false or AsyncPipe.
    // However, since we access a computed/signal directly, let's play safe with pure:false for now
    // or better: just bind to the signal in the service.
})
export class TranslatePipe implements PipeTransform {
    private translationService = inject(TranslationService);

    transform(key: string): string {
        return this.translationService.translate(key);
    }
}
