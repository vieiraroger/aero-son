import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { LogicService } from '../services/logic.service';

@Component({
  selector: 'app-tracking-function',
  templateUrl: './tracking-function.component.html',
  styleUrls: ['./tracking-function.component.scss']
})
export class TrackingFunctionComponent implements OnInit {

  constructor(private PositionPlanes: PositionPlanesService, private logic: LogicService) { }

  ngOnInit(): void {
  }

  distan_airport: number;
  distan_nearly: number;
  time_to_colision: number;

  private airport = { x:0, y:0};


  airpotDistance (){
    if(this.distan_airport == null){
      return;
    }

    let distances = this.logic.planes_closest_to_airport(this.airport, this.PositionPlanes.getPlanes(), this.distan_airport );

    this.PositionPlanes.addTracking(distances);

    this.distan_airport = null;

  }
  nearlyPlanes (){
    if(this.distan_nearly == null){
      return;
    }

    let distances = this.logic.planes_closest_to_planes(this.PositionPlanes.getPlanes(), this.distan_nearly );

    this.PositionPlanes.addTracking(distances);

    this.distan_nearly = null;

  }
  colisionTime (){
    let selectedPlanes = this.PositionPlanes.getSelectedPlanes();

    if ((selectedPlanes.length < 2) || (!this.time_to_colision)){
      alert('É preciso selecionar pelo menos 2 aviões e preencher o tempo mínimo!!');
      return;
    }
    let distances = this.logic.planes_in_collision_route(selectedPlanes, this.time_to_colision );

    console.log(distances);

    this.time_to_colision = null;
    this.PositionPlanes.clearSelectedPlanes();

  }
}
