import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  public array = [0,1,2,3,4,5,6,7,8,9];

  constructor(
    private positionPlane: PositionPlanesService
  ) { }

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


}
