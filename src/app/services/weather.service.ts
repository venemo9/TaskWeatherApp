import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '97d61e42deea494dda6e2dac71dd06c9';

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=97d61e42deea494dda6e2dac71dd06c9&units=metric`)
  }
}
