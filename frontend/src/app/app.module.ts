import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GoodReturnComponent } from './good-return/good-return.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { TransferOutAdviseComponent } from './transfer-out-advise/transfer-out-advise.component';
import { TransferInComponent } from './transfer-in/transfer-in.component';
import { InboundComponent } from './inbound/inbound.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodReturnComponent,
    DataTransferComponent,
    TransferOutAdviseComponent,
    TransferInComponent,
    InboundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
