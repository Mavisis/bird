import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './/components/about/about/about';
import { Mcp } from './components/mcp/mcp';
import { A2a } from './components/a2a/a2a';
import { Pricing } from './components/pricing/pricing';
import { Playground } from './pages/playground/playground';
import { Login } from './components/login/login';
import { AuthGuard } from './core/auth/guard-auth-guard';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'problem', component: A2a },
  { path: 'solution', component: Pricing },
  { path: 'login', component: Login },
  { path: 'playground', component: Playground, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' },



];