import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";
import {DealsForEventResponse} from "../../models/deals-for-event-response";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor(
    private eventService: EventService) { }

    dealsForEvent : DealsForEventResponse;

  eventFc = new FormControl('');

  ngOnInit() {
  }


  getDeals(id: number) : void{
    this.eventService.getDeals(id)
      .subscribe(dealsForEventResponse =>
        this.dealsForEvent = dealsForEventResponse)
  }
  onSubmit() : void {
    this.getDeals(this.eventFc.value);
  }

}
