import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {


  listMovies: any[] = [];
  loading= true;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies().subscribe(data => {
      console.log(data);
      this.listMovies = data.results;
      this.loading = false;
    })
  }

}
