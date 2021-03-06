import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';
import {News} from './models/news.model';
import {Vorstand} from './models/vorstand.model';
import {Asset} from './models/asset.model';
import {environment} from '../environments/environment';
import {Programm} from './models/programm.model';
import {Ereignis} from './models/ereignis.model';
import {Vorstandsmitglied} from './models/Vorstandsmitglied.model';
import { Document } from '@contentful/rich-text-types';
import {ArchivedDocuments} from './archiv/archiv.model';

const CONFIG = {
  space: '56vs0juzkteh',
  accessToken: environment.contentfulApiKey,

  contentTypeIds: {
    ereignis: 'DeHXg4DzkkqWOMy6kA2ao',
    news: 'news',
    vorstand: 'l4eND8PJu0kMseQoe28w2',
    statuten: 'statuten',
    archivedDocuments: 'archivedDocuments'
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

  public getArchivedDocuments(query?: object): Promise<ArchivedDocuments[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.archivedDocuments,
      order: '-fields.date'
    }, query)).then(
      res => {
        const archivedDocuments = [];
        res.items.forEach(item => {
          const archivedDocument = {
            date: new Date(item.fields['date']),
            name: item.fields['name'],
            type: item.fields['type'],
            document: mapAssetInfoToObject(item.fields['document'], res.includes['Asset'])
          };

          archivedDocuments.push(archivedDocument);
        });
        return archivedDocuments;
      });
  }

  public getEvents(query?: object): Promise<Programm> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.ereignis,
      order: 'fields.dateFrom'
    }, query))
      .then(res => {
        const programm = new Programm();
        const ereignisse = new Array<Ereignis>();
        res.items.forEach(item => {
          const ereignies = new Ereignis();
          ereignies.id = item.fields['id'];
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
          ereignisse.push(ereignies);
        });
        programm.ereignisse = ereignisse;
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

  public getStatuten(query?: object): Promise<Document> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.statuten
    }, query)).then(
      res => {
        let document: Document;
        res.items.forEach(item => {
          document = item.fields['inhalt'];
          console.log('Statuen: ' + document);
        });
        return document;
      }
    );
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
