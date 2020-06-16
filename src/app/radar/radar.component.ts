import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  public array = [0,1,2,3,4,5,6,7,8,9];

  constructor(private airplanes: PositionPlanesService) { }
  
  public planes = this.airplanes.getPlanes();
  
  ngOnInit(): void {
  }

  fixX(x) {
    return (x * 60) + 299 - 15;
  }

  fixY(y) {
    return (y * -60) + 299 - 15;
  }


}
