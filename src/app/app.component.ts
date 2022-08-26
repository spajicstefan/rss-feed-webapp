import { Component, OnInit } from '@angular/core';
import { IFeedItem } from './interfaces/feed-item.interface';
import { IFeed } from './interfaces/feed.interface';
import { FeedsService } from './services/feeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';
  pueDate: Date = new Date();
  items: IFeedItem[] = [];

  selectedLanguage: 'ENG' | 'ESP' = 'ENG';

  constructor(private feedsService: FeedsService) {}

  ngOnInit() {
    this.getFeeds(this.selectedLanguage);
  }

  selectLanguage(language: 'ENG' | 'ESP') {
    this.getFeeds(language);
    this.selectedLanguage = language;
  }

  getFeeds(language: 'ENG' | 'ESP') {
    this.feedsService.getFeeds(language).subscribe((feed: IFeed) => {
      this.title = feed.title;
      this.pueDate = new Date(feed.pubDate);
      this.items = feed.items;
    });
  }
}
