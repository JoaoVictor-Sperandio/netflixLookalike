import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:MovieApiService) { }

  bannerResult:any =[];
  trendingMoviesData:any = [];
  actionMovieResult:any = [];
  comedyMovieResult:any = [];
  horrorMovieResult:any = [];
  crimeMovieResult:any = [];
  dramaMovieResult:any = [];
  familyMovieResult:any = [];
  fantasyMovieResult:any = [];
  historyMovieResult:any = [];
  musicMovieResult:any = [];
  mysteryMovieResult:any = [];
  adventuresMoviesResult:any = [];
  animationMoviesResult:any = [];
  documentaryMoviesResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.comedyMovie();
    this.horrorMovie();
    this.crimeMovie();
    this.dramaMovie();
    this.familyMovie();
    this.fantasyMovie();
    this.historyMovie();
    this.musicMovie();
    this.mysteryMovie();
    this.adventuresMovies();
    this.animationMovies();
    this.documentaryMovies();

  }

  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((res)=>{
      console.log(res, 'bannerresult#');
      this.bannerResult = res.results;
    })
  }

  trendingData(){
    this.service.trendingMoviesApiData().subscribe((res)=>{
      console.log(res, 'trendingresult#');
      this.trendingMoviesData = res.results;
    });
  }

  //action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((res)=>{
      console.log(res, 'actionresult#');
      this.actionMovieResult = res.results;
    });
  }
  //comedy
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((res)=>{
      console.log(res, 'comedyresult#');
      this.comedyMovieResult = res.results;
    });
  }
  //horror
  horrorMovie(){
    this.service.fetchHorrorMovies().subscribe((res)=>{
      console.log(res, 'horrorresult#');
      this.horrorMovieResult = res.results;
    });
  }
  //crime
  crimeMovie(){
    this.service.fetchCrimeMovies().subscribe((res)=>{
      console.log(res, 'crimeresult#');
      this.crimeMovieResult = res.results;
    });
  }
  //drama
  dramaMovie(){
    this.service.fetchDramaMovies().subscribe((res)=>{
      console.log(res, 'dramaresult#');
      this.dramaMovieResult = res.results;
    });
  }
  //family
  familyMovie(){
    this.service.fetchFamilyMovies().subscribe((res)=>{
      console.log(res, 'familyresult#');
      this.familyMovieResult = res.results;
    });
  }
  //fantasy
  fantasyMovie(){
    this.service.fetchFantasyMovies().subscribe((res)=>{
      console.log(res, 'fantasyresult#');
      this.fantasyMovieResult = res.results;
    });
  }
  //history
  historyMovie(){
    this.service.fetchHistoryMovies().subscribe((res)=>{
      console.log(res, 'historyresult#');
      this.historyMovieResult = res.results;
    });
  }
  //music
  musicMovie(){
    this.service.fetchMusicMovies().subscribe((res)=>{
      console.log(res, 'musicresult#');
      this.musicMovieResult = res.results;
    });
  }
  //mystery
  mysteryMovie(){
    this.service.fetchMysteryMovies().subscribe((res)=>{
      console.log(res, 'mysteryresult#');
      this.mysteryMovieResult = res.results;
    });
  }
  //adventures
  adventuresMovies(){
    this.service.fetchAdventureMovies().subscribe((res)=>{
      console.log(res, 'adventuresresult#');
      this.adventuresMoviesResult = res.results;
    });
  }
  //animation
  animationMovies(){
    this.service.fetchAnimationMovies().subscribe((res)=>{
      console.log(res, 'animationresult#');
      this.animationMoviesResult = res.results;
    });
  }
  //documentary
  documentaryMovies(){
    this.service.fetchDocumentaryMovies().subscribe((res)=>{
      console.log(res, 'documentaryresult#');
      this.documentaryMoviesResult = res.results;
    });
  }


}
