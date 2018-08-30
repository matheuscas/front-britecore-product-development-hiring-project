import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskTypeDetailsComponent } from './risk-type-details/risk-type-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: RiskTypeDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiskTypeDetailsComponent]
})
export class RisktypeModule { }
