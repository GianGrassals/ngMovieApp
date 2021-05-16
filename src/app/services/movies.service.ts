import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://api.themoviedb.org/3/movie/upcoming';
  apiKey = '5758a6ae072ae5dfb9b374588d133d72';


  constructor(private http: HttpClient) { }


  getMovies(): Observable<any>{
    return this.http.get<any>(this.url + '?api_key=' +this.apiKey +'&language=en-US&page=1');
  }


}
