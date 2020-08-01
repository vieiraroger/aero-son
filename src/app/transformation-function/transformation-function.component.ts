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
    if(this.xMove == null || this.yMove == null || this.PositionPlanes.getSelectedPlanes().length == 0){
      return;
    }

    let Planes = this.Logic.move(this.PositionPlanes.getSelectedPlanes(), this.xMove, this.yMove);


    for(let plane of Planes){
      this.PositionPlanes.editPlane(JSON.parse(JSON.stringify(plane)));
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yMove = null;
    this.xMove = null;
  }

  stagger (){
    if(this.xStagger == null || this.yStagger == null || this.PositionPlanes.getSelectedPlanes().length == 0){
      return;
    }

    let Planes = JSON.parse(JSON.stringify(this.Logic.stagger_decimal(this.PositionPlanes.getSelectedPlanes(), this.xStagger, this.yStagger)));


    for(let plane of Planes){
      this.PositionPlanes.editPlane(plane);
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yStagger = null;
    this.xStagger = null;
  }

  rotate (){
    if(this.xRotate == null || this.yRotate == null || this.angle == null || this.PositionPlanes.getSelectedPlanes().length == 0){
      return;
    }

    let selectedPlanes = this.PositionPlanes.getSelectedPlanes();

    let Planes = JSON.parse(JSON.stringify(this.Logic.rotate(selectedPlanes, this.angle, this.xRotate, this.yRotate)));


    for(let plane of Planes){
      this.PositionPlanes.editPlane(plane);
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yRotate = null;
    this.xRotate = null;
    this.angle = null;
  }

}
