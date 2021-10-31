import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Mail} from '../../../_shared/models/mail.model';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
})
export class MailListComponent implements OnInit {
  @Input() mails: Array<Mail>;

  constructor() {
  }

  ngOnInit() {
  }

}
