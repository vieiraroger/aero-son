import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { LogicService } from '../services/logic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {

  constructor(private radar: PositionPlanesService, private calc: LogicService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  x: number;
  y: number;
  radius: number;
  angle: number;
  velocity: number;
  direction: number;

  insertAirplane() {
    if (this.x == null || this.y == null){
      return;
    }

    this.direction = this.calc.to_360_scale(this.direction);

    let plane =
      {
        id: 0,
        x: 0,
        y: 0,
        radius: 0,
        angle: 0,
        velocity: 0,
        direction: 0,
        color: ""
      };

    plane.x = this.x == null ? 0 : this.x;
    plane.y = this.y == null ? 0 : this.y;
    plane.radius = this.radius == null ? 0 : this.radius;
    plane.angle = this.angle == null ? 0 : this.angle;
    plane.direction = this.direction == null ? 0 : this.direction;
    plane.velocity = this.velocity == null ? 0 : this.velocity;
    plane.color = this.getRandomColor();

    this.radar.addPlane(plane);

    this.x = null;
    this.y = null;
    this.radius = null;
    this.angle = null;
    this.velocity = null;
    this.direction = null;


  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  toCartesian (){
    if(this.radius == null || this.angle == null){
      return;
    }

    let xy: number [] = this.calc.polar_to_cartesian(this.radius, this.angle);

    this.x = xy[0];
    this.y = xy[1];


  }

}
