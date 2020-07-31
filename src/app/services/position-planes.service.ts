import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PositionPlanesService {

  private planes = [
    {
      id:  1,
      x: 1,
      y: 1,
      radius: 0,
      angle: 0,
      velocity: 10,
      direction: 90
    },
    {
      id: 2,
      x: 2,
      y: 2,
      radius: 0,
      angle: 0,
      velocity: 100,
      direction: 90
    },
    {
      id: 3,
      x: 3,
      y: 3,
      radius: 0,
      angle: 0,
      velocity: 110,
      direction: 180
    }
  ];

  private selectedPlanes = [
    {
      id: 1,
      x: 1,
      y: 1,
      radius: 0,
      angle: 0,
      velocity: 10,
      direction: 90
    }
  ];

  private radarState = 'initial';


  constructor() { }

  public getPlanes() {
    return this.planes;
  }

  public addPlane(plane) {
    plane.id = this.planes.length + 1;
    this.planes.push(plane);
  }

  public editPlane(newPlane) {
    let planeToEditIndex = this.planes.findIndex(plane => plane.id == newPlane.id);
    this.planes[planeToEditIndex] = newPlane;
  }

  public selectPlane(plane) {
    this.selectedPlanes.push(plane);
  }

  public deletePlane(planeToDelete) {
    let planeToRemoveIndex = this.planes.findIndex((plane) => plane.id == planeToDelete.id);
    this.planes.splice(planeToRemoveIndex, 1);
  }

  public unselectPlane(planeToUnSelect) {
    let planeToUnSelectIndex = this.selectedPlanes.findIndex(plane => plane.id == planeToUnSelect.id);
    this.selectedPlanes.splice(planeToUnSelectIndex, 1);
  }

  public getSelectedPlanes() {
    return this.selectedPlanes;
  }

  public clearSelectedPlanes() {
    this.selectedPlanes = [];
  }

  public checkIsSelected(planeToCheck) {
    if (this.selectedPlanes.find(plane => planeToCheck.id == plane.id)) {
      return true;
    } else {
      return false;
    }
  }

  public getRadarState() {
    return this.radarState;
  }

  public setRadarState(state) {
    this.radarState = state;
  }


}
