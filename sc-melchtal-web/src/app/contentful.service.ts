import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';

const CONFIG = {
  space: '56vs0juzkteh',
  accessToken: '076973e49c190bc4fa3a8dea02b3ee08a223f4166ba8de1ba5456bea6e42df86',

  contentTypeIds: {
    ereignis: 'DeHXg4DzkkqWOMy6kA2ao'
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
    return this.cdaClient.getEntries(Object.assign(
      {
        content_type: CONFIG.contentTypeIds.ereignis,
        order: 'fields.dateFrom',
        'fields.dateFrom[gte]': new Date()
      }, query))
      .then(res => res.items);
  }
}
