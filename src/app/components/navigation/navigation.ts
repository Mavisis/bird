import { Component } from '@angular/core';
import { NavigationService } from '../../core/navigation/navigation.service';
import { HamburgerIcon } from './hamburger-icon/hamburger-icon';
import { NavigationMenu } from './navigation-menu/navigation-menu';

@Component({
  selector: 'NavigationComponent',
  templateUrl: './navigation.html',
  imports: [],
  styleUrls: ['./navigation.scss']
})
export class NavigationComponent {
  constructor(private menuService: NavigationService) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}