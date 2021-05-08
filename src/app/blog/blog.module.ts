import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog.routes';
import { BlogComponent } from './blog.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    AboutComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
