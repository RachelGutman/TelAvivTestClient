import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailRequestsService {

  constructor(private http: HttpClient) { }

  post(email:string):Observable<any>{
    return this.http.post<any>(environment.web_url + '/Email',{email})
  }
}
