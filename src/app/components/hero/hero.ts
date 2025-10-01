import { Component, ElementRef } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
 constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initParallaxEffect();
    this.initAnimations();
  }

  private initParallaxEffect(): void {
    const heroImage = this.elementRef.nativeElement.querySelector('.hero-img');
    if (heroImage) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        heroImage.style.transform = `translateY(${rate}px)`;
      });
    }
  }

  private initAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const animateElements = this.elementRef.nativeElement.querySelectorAll('.animate-fade-in');
    animateElements.forEach((el: HTMLElement) => {
      observer.observe(el);
    });
  }

  onDiscoverClick(): void {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onDemoClick(): void {
    alert('Demo aanvraag functionaliteit zou hier worden geopend!');
  }
}

