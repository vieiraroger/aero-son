import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataInputComponent } from './data-input/data-input.component';
import { TransformationFunctionComponent } from './transformation-function/transformation-function.component';
import { TrackingFunctionComponent } from './tracking-function/tracking-function.component';
import { RadarComponent } from './radar/radar.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataInputComponent,
    TransformationFunctionComponent,
    TrackingFunctionComponent,
    RadarComponent,
    DataGridComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
