import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service:MovieApiService, private router:ActivatedRoute) { }
  getMovieDetailsResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);

  }

  getMovie(id:any){
    this.service.movieDetails(id).subscribe((res:any)=>{
      console.log(res,'moviedetails#');
      this.getMovieDetailsResult = res;
    });
  }

  getVideo(id:any){
    this.service.movieVideo(id).subscribe((res:any)=>{
      console.log(res,'movievideo#');
      res.results.forEach((element:any) => {
        if(element.type == 'Trailer' || element.type == 'Teaser'){
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getCast(id:any){
    this.service.movieCast(id).subscribe((res:any)=>{
      console.log(res,'moviecast#');
      this.getMovieCastResult = res.cast;
    });
  }

}
