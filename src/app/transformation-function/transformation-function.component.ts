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

  xMove: string = '';
  yMove: string = '';

  translate (){
    if(!this.xMove || !this.yMove){
      return;
    }

    let Planes = this.Logic.move(this.PositionPlanes.getSelectedPlanes(), this.xMove, this.yMove);


    for(let plane of Planes){
      this.PositionPlanes.editPlane(plane);
    }

    this.PositionPlanes.clearSelectedPlanes();
    this.yMove = '';
    this.xMove = '';

  }

}
