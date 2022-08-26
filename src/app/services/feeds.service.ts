import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeed } from '../interfaces/feed.interface';

const endpoint = 'http://localhost:8080/rssfeed';

@Injectable({ providedIn: 'root' })
export class FeedsService {
  constructor(private http: HttpClient) {}

  getFeeds(language: 'ENG' | 'ESP'): Observable<IFeed> {
    return this.http.get<IFeed>(endpoint, { params: { language } });
  }
}
