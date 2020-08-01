import { Injectable } from '@angular/core';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class PositionPlanesService {

  private planes = [

  ];

  private selectedPlanes = [

  ];

  private tracking = [

  ];

  private radarState = 'initial';


  constructor(private toaster: ToastrService) { }

  public getPlanes() {
    return this.planes;
  }

  public addPlane(plane) {
    if (!this.isValidPlane(plane)){
      return;
    }
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

  public isValidPlane (plane){
    if (plane.x > 4.7 || plane.x < -4.7 || plane.y > 4.7 || plane.y < -4.7) {
      this.toaster.error('Avião posicionado fora do alcance', 'Erro!');
      return false;
    } else {
      return true;
    }
  }

  public getRadarState() {
    return this.radarState;
  }

  public setRadarState(state) {
    this.radarState = state;
  }

  public addTracking (tracking){
    this.tracking.push(tracking);
    console.log(this.tracking);
  }

  public getTracking (){
    return this.tracking;
  }
}
