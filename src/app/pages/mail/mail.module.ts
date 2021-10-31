import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailPageRoutingModule } from './mail-routing.module';

import { MailPage } from './mail.page';
import {SearchOverlayComponent} from './search-overlay/search-overlay.component';
import {MailListComponent} from './mail-list/mail-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailPageRoutingModule
  ],
  declarations: [MailPage, SearchOverlayComponent, MailListComponent]
})
export class MailPageModule {}
