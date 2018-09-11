import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddendpointComponent } from '../addendpoint/addendpoint.component';

const routes: Routes = [
    {
        path: '',
        component: AddendpointComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEndPointRoutingModule {}
