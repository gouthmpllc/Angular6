import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
            { path: 'endpoints', loadChildren: './endpoints/endpoints.module#EndpointsModule' },
            { path: 'gateways', loadChildren: './gateways/gateways.module#GatewaysModule' },
            { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
