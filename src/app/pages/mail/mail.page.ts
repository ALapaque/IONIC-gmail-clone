import {Component, OnInit, ViewChild} from '@angular/core';
import {MailService} from '../../_shared/services/mail.service';
import {Observable, of} from 'rxjs';
import {Mail} from '../../_shared/models/mail.model';
import {catchError, tap} from 'rxjs/operators';
import {IonRefresher} from '@ionic/angular';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {
  @ViewChild('ionRefresher') private _refresher: IonRefresher;

  public mails$: Observable<Array<Mail>>;


  constructor(
    private _mailService: MailService,
  ) {
    this._refreshMails();
  }

  ngOnInit() {
  }

  private _refreshMails(): void {
    this.mails$ = this._mailService.getMails().pipe(
      tap(() => this._refresher.complete()),
      catchError((err) => {
        this._refresher.complete();
        return of(err);
      })
    );
  }

  public openAccount($event: MouseEvent): void {

  }

  public refresh($event: any): void {
    this._refreshMails();
  }
}
