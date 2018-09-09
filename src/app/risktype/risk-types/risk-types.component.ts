import { Component, OnInit } from '@angular/core';
import { RisktypesService } from '../../risktypes.service';

@Component({
  selector: 'app-risk-types',
  templateUrl: './risk-types.component.html',
  styleUrls: ['./risk-types.component.css']
})
export class RiskTypesComponent implements OnInit {

  risks: any[];
  risksError: any;
  loading = true;

  constructor(public risksService: RisktypesService) { }

  ngOnInit() {
    this.getAllRisks().subscribe(
      risks => this.risks = risks,
      error => this.risksError = error,
      () => this.loading = false
    );
  }

  getAllRisks(): any {
    return this.risksService.getAll();
  }

}
