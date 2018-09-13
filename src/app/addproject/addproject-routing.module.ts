import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprojectComponent } from '../addproject/addproject.component';

const routes: Routes = [
    {
        path: '',
        component: AddprojectComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddprojectRoutingModule {}
