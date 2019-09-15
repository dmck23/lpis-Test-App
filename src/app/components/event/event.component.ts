import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../models/event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() eventView: Event;

}
