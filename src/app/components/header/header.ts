import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Navigation],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
