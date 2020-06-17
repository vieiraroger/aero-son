import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { LogicService } from '../services/logic.service';

@Component({
  selector: 'app-transformation-function',
  templateUrl: './transformation-function.component.html',
  styleUrls: ['./transformation-function.component.scss']
})
export class TransformationFunctionComponent implements OnInit {

  constructor(private PositionPlanes: PositionPlanesService, private Logic: LogicService) { }

  ngOnInit(): void {
  }

  xMove: number ;
  yMove: number ;
  xStagger: number;
  yStagger: number;
  xRotate: number;
  yRotate: number;
  angle: number;

  translate (){
    if(!this.xMove || !this.yMove || this.PositionPlanes.getSelectedPlanes().length == 0){
      return;
    }    

    let Planes = this.Logic.move(this.PositionPlanes.getSelectedPlanes(), this.xMove, this.yMove);


    for(let plane of Planes){
      this.PositionPlanes.editPlane(plane);
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yMove = null;
    this.xMove = null;    
  }

  stagger (){
    if(!this.xStagger || !this.yStagger || this.PositionPlanes.getSelectedPlanes().length == 0){
      return;
    }    

    let Planes = this.Logic.stagger_decimal(this.PositionPlanes.getSelectedPlanes(), this.xStagger, this.yStagger);


    for(let plane of Planes){
      this.PositionPlanes.editPlane(plane);
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yStagger = null;
    this.xStagger = null;
  }

  rotate (){
    if(!this.xRotate || !this.yRotate || !this.angle || this.PositionPlanes.getSelectedPlanes().length == 0){
      return;
    }    

    let Planes = this.Logic.rotate(this.PositionPlanes.getSelectedPlanes(), this.xRotate, this.yRotate, this.angle);


    for(let plane of Planes){
      this.PositionPlanes.editPlane(plane);
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yRotate = null;
    this.xRotate = null;
    this.angle = null;
  }

}
