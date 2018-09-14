import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProjectsModule as Ng2} from 'ng2-charts';
// import { Ng2Projects } from 'ng2-endpoint-routing.module';
// import { Ng2Projects } from 'ng2-endpoint-routing.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { PageHeaderModule } from '../../shared';
// import { AddprojectComponent } from './addproject/addproject.component';
// import { AddprojectComponent } from '../../addproject/addproject.component';

@NgModule({
    imports: [CommonModule,  ProjectsRoutingModule, PageHeaderModule],
    declarations: [ProjectsComponent],
})
export class ProjectsModule {}


