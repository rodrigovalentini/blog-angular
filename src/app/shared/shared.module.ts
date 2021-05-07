import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [NavBarComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      RouterModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      NavBarComponent,
       RouterModule
    ],
    providers: [],
  })
  export class SharedModule {
    public static forRoot(): ModuleWithProviders<SharedModule> {
      return {
        ngModule: SharedModule,
        providers: [
        ],
      };
    }
  }