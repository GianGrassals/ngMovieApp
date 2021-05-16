import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie : any;
  imgUrl: string;
  movieTitle: string;
  releaseDate: string;
  posterUrl = 'https://image.tmdb.org/t/p/original/';
  id: number;

  constructor() { }

  ngOnInit(): void {
    this.movieTitle = this.movie.title;
    this.imgUrl = this.posterUrl + this.movie.poster_path;
    this.releaseDate = this.movie.release_date;
    this.id = this.movie.id;
  }

}
