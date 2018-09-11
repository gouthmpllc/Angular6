import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEndPointRoutingModule} from './addendpoint-routing.module';
import { AddendpointComponent } from '../addendpoint/addendpoint.component';
import { PageHeaderModule } from '../shared';
import { Router } from '@angular/router';
//mport { Routes, RouterModule } from '@angular/router';
//import { Router } from '../../../node_modules/@angular/router';

@NgModule({
    imports: [CommonModule, AddEndPointRoutingModule, PageHeaderModule],
    declarations: [AddendpointComponent]
})
export class AddendpointModule {}
