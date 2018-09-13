import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddprojectComponent } from '../addproject/addproject.component';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectRoutingModule} from './addproject-routing.module';
import { PageHeaderModule } from '../shared';
import { Router } from '@angular/router';




@NgModule({
  imports: [CommonModule, AddprojectRoutingModule, PageHeaderModule],
  declarations: []
})
export class AddprojectModule { }
