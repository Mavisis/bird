import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation';
import { NavigationMenu } from "../navigation/navigation-menu/navigation-menu";

@Component({
  selector: 'app-header',
  imports: [NavigationComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
