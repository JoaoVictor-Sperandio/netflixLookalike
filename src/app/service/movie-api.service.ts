import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http:HttpClient) {

  }

  baseUrl:string = "https://api.themoviedb.org/3/";
  apiKey:string = "ffa834c7dc699489fdeff35384c67689";

  //bannerApiData
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  //trendingMoviesApiData
  trendingMoviesApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }
//search movie info
  searchMovie(data:any):Observable<any>{
    console.log(data,'movie#')
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

//  get movie details
  movieDetails(data:any):Observable<any>{
    console.log(data,'moviedetails#');
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`);
  }

// get movie video
  movieVideo(data:any):Observable<any>{
    console.log(data,'movievide#');
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`);
  }

  // get movie cast
  movieCast(data:any):Observable<any>{
    console.log(data,'moviecast#');
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`);
  }

  // get movie reviews
  movieReviews(data:any):Observable<any>{
    console.log(data,'moviereviews#');
    return this.http.get(`${this.baseUrl}/movie/${data}/reviews?api_key=${this.apiKey}`);
  }

  // get movie similar
  movieSimilar(data:any):Observable<any>{
    console.log(data,'moviesimilar#');
    return this.http.get(`${this.baseUrl}/movie/${data}/similar?api_key=${this.apiKey}`);
  }

  //action movies
  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }
  //Adventures movies
  fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }
  //Animation movies
  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }
  //Comedy movies
  fetchComedyMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }
  //Crime movies
  fetchCrimeMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=80`);
  }
  //Documentary movies
  fetchDocumentaryMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }
  //Drama movies
  fetchDramaMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=18`);
  }
  //Family movies
  fetchFamilyMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=10751`);
  }
  //Fantasy movies
  fetchFantasyMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=14`);
  }
  //History movies
  fetchHistoryMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=36`);
  }
  //Horror movies
  fetchHorrorMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=27`);
  }
  //Music movies
  fetchMusicMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=10402`);
  }
  //Mystery movies
  fetchMysteryMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=9648`);
  }

}
