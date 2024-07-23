// app.component.ts
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchedValue: string = 'toronto'; // default
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.searchedValue);
  }

  onSubmit(): void {
    this.getWeatherData(this.searchedValue);
    this.searchedValue = '';
  }

  private getWeatherData(searchedValue: string) {
    if (this.searchedValue) {
      this.weatherService.getWeatherData(this.searchedValue).subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
