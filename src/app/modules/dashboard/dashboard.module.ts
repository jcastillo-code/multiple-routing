import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

/* Components */
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StateCardComponent } from './components/state-card/state-card.component';
import { StackedColumnChartComponent } from './components/stacked-column-chart/stacked-column-chart.component';

/* Material imports */
import { MatCardModule, MatDividerModule, MatIconModule } from '@angular/material';

import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DashboardComponent,
    StateCardComponent,
    StackedColumnChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[
  ]
})
export class DashboardModule { }
