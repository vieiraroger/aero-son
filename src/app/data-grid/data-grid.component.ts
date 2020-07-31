import { Component, OnInit } from '@angular/core';
import { PositionPlanesService } from '../services/position-planes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  public selectedPlanes;

  constructor(
    private positionPlanes: PositionPlanesService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getSelectedPlanes() {
    this.positionPlanes.getSelectedPlanes();
  }

  checkPlane(plane) {
    return this.positionPlanes.checkIsSelected(plane);
  }


  planes() {
    return this.positionPlanes.getPlanes();
  }

  selectPlane(plane) {
    this.positionPlanes.selectPlane(plane);

  }

  unselectPlane(plane) {
    this.positionPlanes.unselectPlane(plane);
  }

  deletePlane(plane) {
    this.positionPlanes.deletePlane(plane);
    this.toast.success('Avião Excluído', 'Sucesso!');

  }

}
