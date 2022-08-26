import { IFeedItem } from './feed-item.interface';

export interface IFeed {
  title: string;
  description: string;
  language: string;
  link: string;
  copyright: string;
  pubDate: Date | string;
  items: IFeedItem[];
}
