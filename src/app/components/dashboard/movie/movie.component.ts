import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  id: number;
  listMovies = [];
  selectMovie: any;
  imgUrl: string;
  loading =  true;

  posterUrl = 'https://image.tmdb.org/t/p/original/';
  constructor( private aRoute: ActivatedRoute,
              private movieService: MoviesService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(){
    this.movieService.getMovies().subscribe(data => {
      console.log(data);
      this.listMovies = data.results;
      this.selectMovie = this.listMovies.find(s => s.id === this.id);
      this.imgUrl = this.posterUrl + this.selectMovie.poster_path;
      this.loading = false;
    })
  }

}
