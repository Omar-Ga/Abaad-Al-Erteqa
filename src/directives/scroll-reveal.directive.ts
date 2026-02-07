import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationType: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right' | 'curtain' | 'blur-motion' | 'skew-up' | 'wipe' = 'fade-up';
  @Input() delay: string = '0ms';
  @Input() duration: string = '1000ms';
  @Input() threshold: number = 0.2;

  // Shared IntersectionObserver (Singleton Pattern)
  private static observer: IntersectionObserver | null = null;
  private static observedElements = new Map<Element, ScrollRevealDirective>();

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Initial style setup
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
    this.renderer.addClass(this.el.nativeElement, `reveal-${this.animationType}`);
    
    // Set custom properties for delay and duration
    this.renderer.setStyle(this.el.nativeElement, '--reveal-delay', this.delay);
    this.renderer.setStyle(this.el.nativeElement, '--reveal-duration', this.duration);

    if (isPlatformBrowser(this.platformId)) {
      this.observeElement();
    } else {
      // Server-side rendering fallback: show immediately
      this.reveal();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.unobserveElement();
    }
  }

  private observeElement() {
    // Initialize shared observer if it doesn't exist
    if (!ScrollRevealDirective.observer) {
      ScrollRevealDirective.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const directive = ScrollRevealDirective.observedElements.get(entry.target);
            if (directive) {
              directive.reveal();
              // Stop observing this element once revealed
              ScrollRevealDirective.observer?.unobserve(entry.target);
              ScrollRevealDirective.observedElements.delete(entry.target);
            }
          }
        });
      }, {
        threshold: 0.15, // Unified threshold for better performance
        rootMargin: '0px 0px -50px 0px'
      });
    }

    // Register this element
    ScrollRevealDirective.observedElements.set(this.el.nativeElement, this);
    ScrollRevealDirective.observer.observe(this.el.nativeElement);
  }

  private unobserveElement() {
    ScrollRevealDirective.observedElements.delete(this.el.nativeElement);
    ScrollRevealDirective.observer?.unobserve(this.el.nativeElement);
  }

  private reveal() {
    this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
    this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
    
    // Optimization: Remove will-change after animation completes to free GPU memory
    // Parse duration to milliseconds + buffer
    const durationMs = parseInt(this.duration) || 1000;
    const delayMs = parseInt(this.delay) || 0;
    
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'will-change', 'auto');
    }, durationMs + delayMs + 100); 
  }
}
