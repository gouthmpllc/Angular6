import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointsRoutingModule } from './endpoints-routing.module';
import { EndpointsComponent } from './endpoints.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, EndpointsRoutingModule, PageHeaderModule],
    declarations: [EndpointsComponent]
})
export class EndpointsModule {}
