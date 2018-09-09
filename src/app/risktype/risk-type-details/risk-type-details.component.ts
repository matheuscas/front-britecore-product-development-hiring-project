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
  risk: any;
  riskError: any;
  value: Date;
  public loading = true;

  constructor(private route: ActivatedRoute, public risktypesService: RisktypesService) { }

  ngOnInit() {
    this.routeSub$ = this.route.params.subscribe(params => {
      this.risktypesService.get(+params['id']).subscribe(
        risk => this.risk = risk,
        error => this.riskError = error,
        () => this.loading = false
      );
    });
  }

  ngOnDestroy() {
    this.routeSub$.unsubscribe();
  }

}
