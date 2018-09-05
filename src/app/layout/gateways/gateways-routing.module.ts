import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewaysComponent } from './gateways.component';

const routes: Routes = [
    {
        path: '', component: GatewaysComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GatewaysRoutingModule {
}
