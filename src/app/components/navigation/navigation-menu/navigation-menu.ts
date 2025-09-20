import { Component } from '@angular/core';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  imports: [AsyncPipe],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss'
})
export class NavigationMenu {
 isMenuOpen$?: Observable<boolean>;

  constructor(private menuService: NavigationService) {}

  ngOnInit() {
    this.isMenuOpen$ = this.menuService.menuState$;
  }
}
