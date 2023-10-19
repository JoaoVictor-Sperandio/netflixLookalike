import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private service:MovieApiService) { }

  ngOnInit(): void {
  }
  searchResult:any;

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.searchMovie(this.searchForm.value).subscribe((res:any) => {
      console.log(res, 'searchmovie##');

      this.searchResult = res.results;
    });
  }

}
