import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        borderRadius: '600px'
      })),
      state('final', style({
        borderRadius: '00px'
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ]
    ),
    trigger('changeDivSize', [
      state('initial', style({
        borderRadius: '600px'
      })),
      state('final', style({
        borderRadius: '00px'
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ]
    ),
  ]
})
export class RadarComponent implements OnInit {
  public array = [0,1,2,3,4,5,6,7,8,9];

  constructor(
    private positionPlane: PositionPlanesService
  ) { }



  planeState() {
    // this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  radarState() {
    return this.positionPlane.getRadarState();
  }

  ngOnInit(): void {
  }

  planes() {
    return this.positionPlane.getPlanes();
  }

  fixX(x) {
    return (x * 60) + 299 - 15;
  }

  fixY(y) {
    return (y * -60) + 299 - 15;
  }

  selectPlane(plane) {
    if (this.positionPlane.checkIsSelected(plane)) {
      this.positionPlane.unselectPlane(plane);
    } else {
      this.positionPlane.selectPlane(plane);
    }
  }

  checkPlane(plane) {
    return this.positionPlane.checkIsSelected(plane);
  }

  deletePlane(plane) {
    this.positionPlane.deletePlane(plane);
  }




}
