import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private PositionPlanes: PositionPlanesService) { }

  ngOnInit(): void {
  }

  tracking (){
    return this.PositionPlanes.getTracking();
  }

  isArray(planes){
    console.log(planes);
    if (planes.length && planes.length > 1) {
      return true;
    } else {
      return false;
    }
  }
}
