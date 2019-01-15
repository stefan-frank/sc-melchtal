import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';
import {News} from './models/news.model';
import {Vorstand} from './models/vorstand.model';
import {Asset} from './models/asset.model';
import {environment} from '../environments/environment';
import {Programm} from './models/programm.model';
import {Ereignis} from './models/ereignis.model';
import {Vorstandsmitglied} from './models/Vorstandsmitglied.model';

const CONFIG = {
  space: '56vs0juzkteh',
  accessToken: environment.contentfulApiKey,

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

  public getEvents(query?: object): Promise<Programm> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.ereignis,
      order: 'fields.dateFrom'
    }, query))
      .then(res => {
        const programm = new Programm();
        res.items.forEach(item => {
          const ereignies = new Ereignis();
          ereignies.title = item.fields['title'];
          ereignies.description = item.fields['description'];
          ereignies.dateFrom = new Date(item.fields['dateFrom']);
          if (item.fields['dateTo'] != null) {
            ereignies.dateTo = new Date(item.fields['dateTo']);
          }
          ereignies.calendar = item.fields['calendar'];
          ereignies.anmeldung = item.fields['anmeldung'];
          ereignies.auskunft = item.fields['auskunft'];
          ereignies.contactByMail = item.fields['kontaktPerMail'];
          ereignies.contactByMobile = item.fields['kontaktPerMobile'];
          ereignies.contactByTelefon = item.fields['kontaktPerTelefon'];
          if (item.fields['contact'] != null) {
            ereignies.contact = this.mapvorstandsmitglied(item.fields['contact'], res);
          }
          programm.ereignisse.push(ereignies);
        });
        return programm;
      });
  }

  public getVorstand(query?: object): Promise<Vorstand> {
    return this.cdaClient.getEntries(Object.assign(
      {
        content_type: CONFIG.contentTypeIds.vorstand,
        order: 'fields.order'
      }, query)).then(
        res => {
          const vorstand = new Vorstand();
          vorstand.vorstandsMitglieder = this.mapvorstandsmitglieder(res);
          return vorstand;
        });
  }

  private mapvorstandsmitglieder(res): Vorstandsmitglied[] {
    const vorstandsmitglieder = [];
    res.items.forEach(item => {
      const vorstandsmitglied = this.mapvorstandsmitglied(item, res);
      vorstandsmitglieder.push(vorstandsmitglied);
    });
    return vorstandsmitglieder;
  }

  private mapvorstandsmitglied(item, res): Vorstandsmitglied {
    const vorstandsmitglied = new Vorstandsmitglied();
    vorstandsmitglied.role = item.fields['role'];
    vorstandsmitglied.nachname = item.fields['nachname'];
    vorstandsmitglied.vorname = item.fields['vorname'];
    vorstandsmitglied.email = item.fields['email'];
    vorstandsmitglied.mobile = item.fields['mobile'];
    vorstandsmitglied.telefon = item.fields['telefon'];
    vorstandsmitglied.strasse = item.fields['strasse'];
    vorstandsmitglied.zipcode = item.fields['zipcode'];
    vorstandsmitglied.location = item.fields['location'];
    vorstandsmitglied.avatar = mapAssetInfoToObject(item.fields['avatar'], res.includes['Asset']);
    return vorstandsmitglied;
  }

  public getNews(query?: object): Promise<News[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.news,
      order: '-fields.date'
    }, query)).then(
      res => {
        const news = [];
        res.items.forEach(item => {
          const newsItem = new News();
          newsItem.title = item.fields['title'];
          newsItem.text = item.fields['text'];
          if (item.fields['document'] != null) {
            newsItem.attachement = mapAssetInfoToObject(item.fields['document'], res.includes['Asset']);
          }
          if (item.fields['author'] != null) {
            newsItem.author = this.mapvorstandsmitglied(item.fields['author'], res);
          }
          newsItem.created = new Date(item.sys.createdAt);
          newsItem.updated = new Date(item.sys.updatedAt);
          news.push(newsItem);
        });
        return news;
      });
  }
}

function mapAssetInfoToObject(item: any, assets: Array<any>): Asset {
  const asset = new Asset();
  const fileAssetId = <string> item['sys']['id'];
  assets.forEach(assetItem => {
    const assetId = <string> assetItem['sys']['id'];
    if (assetId === fileAssetId) {
      asset.filename = assetItem['fields']['file']['fileName'];
      asset.url = assetItem['fields']['file']['url'];
      asset.contentType = assetItem['fields']['file']['contentType'];
    }
  });
  return asset;
}
