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
  risks$: Observable<any[]>;

  constructor(public risksService: RisktypesService) {
    this.risks$ = this.getAllRisks();
  }

  getAllRisks(): any {
    return this.risksService.getAll();
  }
}
