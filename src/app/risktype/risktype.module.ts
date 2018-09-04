import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskTypeDetailsComponent } from './risk-type-details/risk-type-details.component';
import { Routes, RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { RiskTypesComponent } from './risk-types/risk-types.component';

const routes: Routes = [
  {path: '', component: RiskTypesComponent},
  {path: ':id', component: RiskTypeDetailsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CalendarModule
  ],
  declarations: [RiskTypeDetailsComponent, RiskTypesComponent]
})
export class RisktypeModule { }
