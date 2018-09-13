import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'newendpoint', loadChildren:'./newendpoint/newendpoint.module#NewendpointModule'},
    { path: 'addendpoint', loadChildren:'./addendpoint/addendpoint.module#AddendpointModule'},
    // { path: 'addproject', loadChildren:'./layout/projects/addproject/addproject.module#AddprojectModule'},
    { path: 'addproject', loadChildren:'./addproject/addproject.module#AddprojectModule'},
    
    
   
   
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
