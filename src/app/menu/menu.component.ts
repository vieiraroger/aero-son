import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('pressButton', [
      state('initial', style({
      })),
      state('final', style({
      })),
      transition('initial=>final',
        animate('1000ms', keyframes([
          style({ transform: 'translateY(0px)', offset: 0}),
          style({ transform: 'translateY(10px)', offset: 0.33}),
          style({transform: 'translateY(0px)', offset: 0.70})
        ]))),
      transition('final=>initial',
        animate('1000ms',keyframes([
          style({ transform: 'translateY(0px)', offset: 0}),
          style({ transform: 'translateY(10px)', offset: 0.33}),
          style({transform: 'translateY(0px)', offset: 0.70})
        ])))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  constructor(private positionPlane: PositionPlanesService) { }

  ngOnInit(): void {
  }

  changeState() {
    let state = this.positionPlane.getRadarState() === 'initial' ? 'final' : 'initial';
    this.positionPlane.setRadarState(state);
  }

  getState() {
    return this.positionPlane.getRadarState();
  }

}
