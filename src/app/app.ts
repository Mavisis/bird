import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Playground } from "./pages/playground/playground";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet, Footer, Playground],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bird');
}
