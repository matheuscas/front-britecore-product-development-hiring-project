import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RisktypesService } from '../../risktypes.service';

@Component({
  selector: 'app-risk-type-details',
  templateUrl: './risk-type-details.component.html',
  styleUrls: ['./risk-type-details.component.css']
})
export class RiskTypeDetailsComponent implements OnInit, OnDestroy {

  routeSub$: Subscription;
  risk$: any;
  value: Date;

  constructor(private route: ActivatedRoute, public risktypesService: RisktypesService) { }

  ngOnInit() {
    this.routeSub$ = this.route.params.subscribe(params => {
      this.risk$ = this.risktypesService.get(+params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub$.unsubscribe();
  }

}
