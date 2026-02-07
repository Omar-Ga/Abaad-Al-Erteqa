import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationType: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right' = 'fade-up';
  @Input() delay: string = '0ms';
  @Input() duration: string = '1000ms';
  @Input() threshold: number = 0.2;

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Initial style setup
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
    this.renderer.addClass(this.el.nativeElement, `reveal-${this.animationType}`);
    
    // Set custom properties for delay and duration
    this.renderer.setStyle(this.el.nativeElement, '--reveal-delay', this.delay);
    this.renderer.setStyle(this.el.nativeElement, '--reveal-duration', this.duration);

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
          this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
          // Optional: Stop observing once revealed
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: this.threshold,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element is fully in view
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
