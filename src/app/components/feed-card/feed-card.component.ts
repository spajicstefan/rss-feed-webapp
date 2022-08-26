import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent implements OnInit {
  @Input()
  author = '';
  @Input()
  title = '';
  @Input()
  description = '';
  @Input()
  image = '';
  @Input()
  link = '';
  @Input()
  pubDate: string | Date = '';
  @Input()
  showDivider = true;

  constructor() {}

  ngOnInit(): void {}
}
