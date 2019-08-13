import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, NavigationComponent, ContentComponent } from './component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    LayoutComponent
    ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularFontAwesomeModule,
    MatSidenavModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
