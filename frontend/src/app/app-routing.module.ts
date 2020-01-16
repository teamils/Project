import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodReturnComponent } from './good-return/good-return.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { TransferOutAdviseComponent } from './transfer-out-advise/transfer-out-advise.component';
import { TransferInComponent } from './transfer-in/transfer-in.component';
import { InboundComponent } from './inbound/inbound.component';
const routes: Routes = [
    { path: '', redirectTo: '/good-return', pathMatch: 'full' },
    { path: 'good-return', component: GoodReturnComponent },
    { path: 'data-transfer', component: DataTransferComponent },
    { path: 'data-transfer-out', component: TransferOutAdviseComponent },
    { path: 'data-transfer-in', component: TransferInComponent },
    { path: 'inbound', component: InboundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
