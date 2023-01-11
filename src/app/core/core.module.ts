import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MasterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MasterComponent
  ]
})
export class CoreModule { }
