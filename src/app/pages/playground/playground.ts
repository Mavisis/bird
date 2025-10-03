import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ColorScale {
  name: string;
  shades: { shade: string; hex: string }[];
}

interface TypographyExample {
  class: string;
  label: string;
  text: string;
}

@Component({
  selector: 'app-playground',
  imports: [CommonModule, FormsModule],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {
  // Color palettes organized by category
  colorPalettes: ColorScale[] = [
    {
      name: 'Primary',
      shades: [
        { shade: '50', hex: '#eff6ff' },
        { shade: '100', hex: '#dbeafe' },
        { shade: '200', hex: '#bfdbfe' },
        { shade: '300', hex: '#93c5fd' },
        { shade: '400', hex: '#60a5fa' },
        { shade: '500', hex: '#3b82f6' },
        { shade: '600', hex: '#2563eb' },
        { shade: '700', hex: '#1d4ed8' },
        { shade: '800', hex: '#1e40af' },
        { shade: '900', hex: '#1e3a8a' }
      ]
    },
    {
      name: 'Complement',
      shades: [
        { shade: '50', hex: '#fff5ef' },
        { shade: '100', hex: '#ffe3d1' },
        { shade: '200', hex: '#ffc9a7' },
        { shade: '300', hex: '#fba874' },
        { shade: '400', hex: '#f98d4f' },
        { shade: '500', hex: '#f6863b' },
        { shade: '600', hex: '#e86c28' },
        { shade: '700', hex: '#c55320' },
        { shade: '800', hex: '#a3411b' },
        { shade: '900', hex: '#893617' }
      ]
    },
    {
      name: 'Analogous 1',
      shades: [
        { shade: '50', hex: '#f3efff' },
        { shade: '500', hex: '#763bf6' },
        { shade: '900', hex: '#371575' }
      ]
    },
    {
      name: 'Analogous 2',
      shades: [
        { shade: '50', hex: '#effffa' },
        { shade: '500', hex: '#3bf6ae' },
        { shade: '900', hex: '#1b7351' }
      ]
    },
    {
      name: 'Accent',
      shades: [
        { shade: '50', hex: '#ecfdf5' },
        { shade: '500', hex: '#10b981' },
        { shade: '900', hex: '#064e3b' }
      ]
    }
  ];

  semanticColors = [
    { name: 'Success', class: 'success', hex: '#22c55e' },
    { name: 'Warning', class: 'warning', hex: '#eab308' },
    { name: 'Danger', class: 'danger', hex: '#ef4444' }
  ];

  typographyExamples: TypographyExample[] = [
    { class: 'h1', label: 'Heading 1', text: 'The quick brown fox jumps' },
    { class: 'h2', label: 'Heading 2', text: 'The quick brown fox jumps' },
    { class: 'h3', label: 'Heading 3', text: 'The quick brown fox jumps' },
    { class: 'body', label: 'Body Text', text: 'The quick brown fox jumps over the lazy dog' }
  ];

  spacingValues = [
    { name: '0.5', value: '0.125rem', pixels: '2px' },
    { name: '1', value: '0.25rem', pixels: '4px' },
    { name: '2', value: '0.5rem', pixels: '8px' },
    { name: '3', value: '0.75rem', pixels: '12px' },
    { name: '4', value: '1rem', pixels: '16px' },
    { name: '6', value: '1.5rem', pixels: '24px' },
    { name: '8', value: '2rem', pixels: '32px' },
    { name: '12', value: '3rem', pixels: '48px' }
  ];

  radiusValues = [
    { name: 'sm', value: '0.25rem', pixels: '4px' },
    { name: 'md', value: '0.5rem', pixels: '8px' },
    { name: 'lg', value: '0.75rem', pixels: '12px' },
    { name: 'xl', value: '1rem', pixels: '16px' },
    { name: 'pill', value: '9999px', pixels: 'full' }
  ];

  shadowLevels = ['xs', 'sm', 'md', 'lg', 'xl'];

  formValue = {
    text: '',
    email: '',
    select: '',
    textarea: ''
  };

  selectedTab = 'colors';

  tabs = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'components', label: 'Components' },
    { id: 'forms', label: 'Forms' },
    { id: 'effects', label: 'Effects' }
  ];

  selectTab(tabId: string): void {
    this.selectedTab = tabId;
  }

  onButtonClick(type: string): void {
    console.log(`${type} button clicked`);
  }

  onFormSubmit(): void {
    console.log('Form submitted:', this.formValue);
  }

}
