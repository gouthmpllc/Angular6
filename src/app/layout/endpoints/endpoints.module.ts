import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointsRoutingModule } from './endpoints-routing.module';
import { EndpointsComponent } from './endpoints.component';
import { PageHeaderModule } from './../../shared';
import { AddendpointComponent } from './addendpoint/addendpoint.component';

@NgModule({
    imports: [CommonModule, EndpointsRoutingModule, PageHeaderModule],
    declarations: [EndpointsComponent, AddendpointComponent]
})
export class EndpointsModule {}
