import {Component, Input, OnInit} from '@angular/core';
import {Mail} from '../../../_shared/models/mail.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
})
export class MailListComponent implements OnInit {
  @Input() mails: Array<Mail>;

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit() {
  }

  openDetails(mail: Mail) {
    this._router.navigate(['tabs', 'mail', mail.id]);
  }
}
