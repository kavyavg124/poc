import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MessageComponent } from './component/message/message.component';
import { CommonLoaderComponent } from './component/common-loader/common-loader.component';
import { MessageService, SharedService } from '../shared/services';

@NgModule({
  declarations: [MessageComponent, CommonLoaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MessageComponent,
    CommonLoaderComponent
  ],
  providers: [
    MessageService,
    SharedService
  ],

})
export class SharedModule { }
