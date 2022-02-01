import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  theme: string = ''
  themeMap: any = {
    dark: 'light',
    light: 'solar',
    solar: 'dark'
  }
	nextTheme: string = '' 
  constructor(private themService: ThemeService) { }

  ngOnInit(): void {
		this.theme = Object.keys(this.themeMap)[0]
		this.nextTheme = this.themeMap[this.theme]
		localStorage.setItem('theme', this.theme)
		this.swithTheme(this.theme)
  }

	swithTheme(theme: string) {
		switch (theme) {
			case 'dark':
				this.themService.setDarkTheme();
				break;
			case 'light':
				this.themService.setLightTheme();
				break;
			case 'solar':
				this.themService.setSolarTheme();
				break;
		}
	}
	onClickTheme() {
		const current = localStorage.getItem('theme');
		this.theme = this.themeMap[String(current)];
		this.swithTheme(this.theme);
		this.nextTheme = this.themeMap[this.theme]
		localStorage.setItem('theme', this.theme);
	}
}
