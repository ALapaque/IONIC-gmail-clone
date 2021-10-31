import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailPageRoutingModule } from './mail-routing.module';

import { MailPage } from './mail.page';
import {SearchOverlayComponent} from './search-overlay/search-overlay.component';
import {MailListComponent} from './mail-list/mail-list.component';
import {AccountPageModule} from '../account/account.module';
import {SharedModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailPageRoutingModule,
    AccountPageModule,
    SharedModule
  ],
  declarations: [MailPage, SearchOverlayComponent, MailListComponent]
})
export class MailPageModule {}
