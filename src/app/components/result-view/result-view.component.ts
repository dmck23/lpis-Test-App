import {Component, Input, OnInit} from '@angular/core';
import {DealsForEventResponse} from "../../models/deals-for-event-response";

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  dealsForEvent: DealsForEventResponse;

}
