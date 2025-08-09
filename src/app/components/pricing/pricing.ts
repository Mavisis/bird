import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {

}
