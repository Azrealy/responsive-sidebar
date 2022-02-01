import { Injectable } from '@angular/core';
import { dark, light, solar, Theme } from '../theme/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme = light

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }
  setSolarTheme(): void {
    this.setActiveTheme(solar);
  }
  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
