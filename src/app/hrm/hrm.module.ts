import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmComponent } from './hrm.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HrmComponent
  ],
  imports: [
    CommonModule
    RouterModule
  ],
  exports: [
    HrmComponent
  ]
})
export class HrmModule { }
