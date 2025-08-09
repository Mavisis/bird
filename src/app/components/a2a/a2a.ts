import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-a2a',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './a2a.html',
  styleUrl: './a2a.scss'
})
export class A2a {

}
