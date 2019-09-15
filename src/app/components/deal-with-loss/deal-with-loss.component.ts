import {Component, Input, OnInit} from '@angular/core';
import {DealWithLoss} from "../../models/deal-with-loss";

@Component({
  selector: 'app-deal-with-loss',
  templateUrl: './deal-with-loss.component.html',
  styleUrls: ['./deal-with-loss.component.css']
})
export class DealWithLossComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dealWithLoss : DealWithLoss;

}
