import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog.routes';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
