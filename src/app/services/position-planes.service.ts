import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PositionPlanesService {

  private planes = [
    {
      id: 1,
      x: 1,
      y: 1,
      angle: 90,
      velocity: 100
    },
    {
      id: 2,
      x: 2,
      y: 2,
      angle: 90,
      velocity: 100
    },
    {
      id: 3,
      x: 3,
      y: 3,
      angle: 0,
      velocity: 100
    }
  ];

  private selectedPlanes = [
    {
      id: 1,
      x: 1,
      y: 1,
      angle: 90,
      velocity: 100
    }
  ];


  constructor() { }

  public getPlanes() {
    return this.planes;
  }

  public addPlane(plane) {
    plane.id = this.planes.length + 1;
    this.planes.push(plane);
    console.log(this.planes);
  }

  public editPlane(newPlane) {
    let planeToEditIndex = this.planes.findIndex(plane => plane.id == newPlane.id);
    this.planes[planeToEditIndex] = newPlane;
  }

  public selectPlane(plane) {
    this.selectedPlanes.push(plane);
  }

  public unselectPlane(planeToRemove) {
    let planeToRemoveIndex = this.selectedPlanes.findIndex(plane => plane.id == planeToRemove.id);
    this.selectedPlanes.splice(planeToRemoveIndex, 1);
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



}
