import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private _popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  close(): void {
    this._popoverController.dismiss();
  }

}
