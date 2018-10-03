import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';
import {News} from './home/News';
import {Vorstand} from './Vorstand';
import {v} from "@angular/core/src/render3";
import {Assett} from "./Assett";

const CONFIG = {
  space: '56vs0juzkteh',
  accessToken: '076973e49c190bc4fa3a8dea02b3ee08a223f4166ba8de1ba5456bea6e42df86',

  contentTypeIds: {
    ereignis: 'DeHXg4DzkkqWOMy6kA2ao',
    news: 'news',
    vorstand: 'l4eND8PJu0kMseQoe28w2'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {
  }

  public getEvents(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.ereignis,
      order: 'fields.dateFrom'
    }, query))
      .then(res => res.items);
  }

  public getEventsInFuture(query?: object): Promise<Entry<any>[]> {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return this.cdaClient.getEntries(Object.assign(
      {
        content_type: CONFIG.contentTypeIds.ereignis,
        order: 'fields.dateFrom',
        'fields.dateFrom[gte]': yesterday
      }, query))
      .then(res => res.items);
  }

  public getVorstand(query?: object): Promise<Vorstand[]> {
    return this.cdaClient.getEntries(Object.assign(
      {
        content_type: CONFIG.contentTypeIds.vorstand,
        order: 'fields.order'
      }, query)).then(
        res => {
          const vorstandsMitglieder = [];
          res.items.forEach(item => {
            const vorstandsMitglied = new Vorstand();
            vorstandsMitglied.role = item.fields['role'];
            vorstandsMitglied.nachname = item.fields['nachname'];
            vorstandsMitglied.vorname = item.fields['vorname'];
            vorstandsMitglied.email = item.fields['email'];
            vorstandsMitglied.mobile = item.fields['mobile'];
            vorstandsMitglied.telefon = item.fields['telefon'];
            vorstandsMitglied.strasse = item.fields['strasse'];
            vorstandsMitglied.zipcode = item.fields['zipcode'];
            vorstandsMitglied.location = item.fields['location'];
            vorstandsMitglied.avatar = mapAssetInfoToObject(item.fields['avatar'], res.includes['Asset']);
            vorstandsMitglieder.push(vorstandsMitglied);
          });
          return vorstandsMitglieder;
        });
  }

  public getNews(query?: object): Promise<News[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.news
    }, query)).then(
      res => {
        const news = [];
        res.items.forEach(item => {
          const newsItem = new News();
          newsItem.title = item.fields['title'];
          newsItem.text = item.fields['text'];
          const fileAssetId = <string> item.fields['document']['sys']['id'];

          const asset = <Array<any>> res.includes['Asset'];
          asset.forEach(assetItem => {
            const assetId = <string> assetItem['sys']['id'];
            if (assetId === fileAssetId) {
              newsItem.filename = assetItem['fields']['file']['fileName'];
              newsItem.url = assetItem['fields']['file']['url'];
              newsItem.contentType = assetItem['fields']['file']['contentType'];
            }
          });
          news.push(newsItem);
        });
        return news;
      });
  }
}

function mapAssetInfoToObject(item: any, asset: Array<any>): Assett {
  const assett = new Assett();
  console.log('mapAssetInfoToObject - 0: ' + item.toString());
  const fileAssetId = <string> item['sys']['id'];
  console.log('mapAssetInfoToObject - 1');
  asset.forEach(assetItem => {
    const assetId = <string> assetItem['sys']['id'];
    if (assetId === fileAssetId) {
      assett.filename = assetItem['fields']['file']['fileName'];
      assett.url = assetItem['fields']['file']['url'];
      assett.contentType = assetItem['fields']['file']['contentType'];
    }
  });
  console.log('mapAssetInfoToObject - 2');
  return assett;
}
