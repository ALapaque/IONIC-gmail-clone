import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {AccountPage} from '../../account/account.page';

@Component({
  selector: 'app-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.scss'],
})
export class SearchOverlayComponent implements OnInit {

  constructor(
    private popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
  }

  async openAccount($event) {
    const popover = await this.popoverController.create({
      component: AccountPage,
      event: $event,
      cssClass: 'custom-popover'
    });

    await popover.present();
  }
}
