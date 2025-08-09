import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-mcp',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './mcp.html',
  styleUrl: './mcp.scss'
})
export class Mcp {

}
