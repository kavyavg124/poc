import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class PagesModule { }
