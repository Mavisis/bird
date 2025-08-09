import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mcp } from './components/mcp/mcp';
import { A2a } from './components/a2a/a2a';
import { Pricing } from './components/pricing/pricing';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mcp', component: Mcp },
  { path: 'a2a', component: A2a },
  { path: 'pricing', component: Pricing },
  { path: '**', redirectTo: '' }
];