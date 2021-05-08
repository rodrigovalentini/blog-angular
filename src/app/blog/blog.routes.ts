import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'description', component: DescriptionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
