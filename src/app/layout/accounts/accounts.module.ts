import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, AccountsRoutingModule, PageHeaderModule],
    declarations: [AccountsComponent]
})
export class AccountsModule {}
