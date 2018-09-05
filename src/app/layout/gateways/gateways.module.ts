import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewaysRoutingModule } from './gateways-routing.module';
import {GatewaysComponent } from './gateways.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, GatewaysRoutingModule, PageHeaderModule],
    declarations: [GatewaysComponent]
})
export class GatewaysModule {}
