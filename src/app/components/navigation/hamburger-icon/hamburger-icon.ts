import { Component } from '@angular/core';
import { NavigationService } from '../../../core/navigation/navigation.service';
@Component({
  selector: 'app-hamburger-icon',
  imports: [],
  templateUrl: './hamburger-icon.html',
  styleUrl: './hamburger-icon.scss'
})
export class HamburgerIcon {
  constructor(private menuService: NavigationService) { }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
