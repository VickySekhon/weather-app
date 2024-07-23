import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherAPIBaseUrl + '/city/' + cityName + '/EN',
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          )
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeaderValue
          ),
      }
    );
  }
}
