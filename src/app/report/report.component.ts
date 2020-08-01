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

  isArray(isvar){
    if (isvar.lenght == 1) {
      console.log(false);
      return false;
    }else {
      return true;
    }

  }
}
