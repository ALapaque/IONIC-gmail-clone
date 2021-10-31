import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Mail} from '../models/mail.model';
import {delay, map} from 'rxjs/operators';
import {MAILS} from './datasources/mails.datasource';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  public getMails(): Observable<Array<Mail>> {
    const fakeDelay: number = Math.floor(Math.random() * (1500 - 125 + 1) + 125);

    return of(MAILS).pipe(
      delay(fakeDelay),
      map((mails: Array<Mail>) => mails.map((mail: Mail) => new Mail(mail)))
    );
  }
}
