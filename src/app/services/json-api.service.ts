import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMyIp(): Observable<any> {
    return this.httpClient.get('http://ip.jsontest.com/');
  }
}
