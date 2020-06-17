import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { LogicService } from '../services/logic.service';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {

  constructor(private radar: PositionPlanesService, private calc: LogicService) { }

  ngOnInit(): void {
  }
  
  x: number;
  y: number;
  radius: number;
  angle: number;
  velocity: number;
  direction: number;

  insertAirplane() {
    if (!this.x || !this.y){
      return;      
    }

    let plane = 
      {
        id: 0, 
        x: this.x, 
        y: this.y, 
        radius: this.radius,
        angle: this.angle,        
        velocity: this.velocity,
        direction: this.direction
      };
    
    this.radar.addPlane(plane);

    this.x = null;
    this.y = null;
    this.radius = null;
    this.angle = null;
    this.velocity = null;
    this.direction = null;
    

  }

  toCartesian (){
    if(!this.radius || !this.angle){
      return;
    }

    let xy: number [] = this.calc.polar_to_cartesian(this.radius, this.angle);

    this.x = xy[0];
    this.y = xy[1];


  }

}
