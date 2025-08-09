import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Mcp } from '../../components/mcp/mcp';
import { A2a } from '../../components/a2a/a2a';
import { Pricing } from '../../components/pricing/pricing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Mcp, A2a, Pricing],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
