import { Component } from '@angular/core';
import { RisktypesService } from './risktypes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BriteCore Product Development Project';
  risks: any[];
  risksError: any;

  constructor(public risksService: RisktypesService) {
    this.getAllRisks().subscribe(
      risks => this.risks = risks,
      error => this.risksError = error
    );
  }

  getAllRisks(): any {
    return this.risksService.getAll();
  }
}
