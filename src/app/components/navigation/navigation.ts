import { Component, ElementRef, OnInit} from '@angular/core';
import { NavigationService } from '../../core/navigation/navigation.service';


@Component({
  selector: 'NavigationComponent',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class NavigationComponent implements OnInit {
  

   isMobileMenuOpen = false;

  constructor(private elementRef: ElementRef, menuService: NavigationService) {}

  ngOnInit(): void {
    this.initScrollEffect();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  private initScrollEffect(): void {
    const nav = this.elementRef.nativeElement.querySelector('.nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(255, 255, 255, 0.98)';
          nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
          nav.style.background = 'rgba(255, 255, 255, 0.95)';
          nav.style.boxShadow = 'none';
        }
      });
    }
  }

  onAnchorClick(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMobileMenu();
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}