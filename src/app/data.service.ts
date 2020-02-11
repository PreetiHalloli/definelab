import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allUrl = "https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&oauth_token=NPKYZ3WZ1VYMNAZ2FLX1WLECAWSMUVOQZOIDBN53F3LVZBPQ&v=20180616"

  private matchesUrl= "http://localhost:3000/savedMatches";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get<any>(this.allUrl);
  }

  public saveMatch(data: Data): Observable<Data>{
    return this.http.post<Data>(this.matchesUrl, data);
  }

  public getMatches(): Observable<Data[]>{
    return this.http.get<Data[]>(this.matchesUrl);
  }

  public deletematch(id: number): Observable<void>{
    return this.http.delete<void>(this.matchesUrl+ "/" +id);
  } 
}
