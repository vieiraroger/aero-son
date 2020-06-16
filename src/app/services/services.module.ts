import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionPlanesService } from './position-planes.service';
import { LogicService } from './logic.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PositionPlanesService,
    LogicService
  ]
})
export class ServicesModule { }
