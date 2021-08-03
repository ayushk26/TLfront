import { Component, OnInit } from '@angular/core';
declare var $: any;
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  items = []
  events = []
  lis = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    //Code for front
    





    //code for api

    this.api.getEvents().subscribe(
      data => {
        this.events = data
        let ev = this.events
        this.api.getItems().subscribe(
          items => {
            this.items = items
            let itemlist = this.items
            for (let i = 0; i < ev.length; i++) {
              let details = ev[i].details;
              let image = ev[i].image;
              let link = ev[i].link;
              let date = ev[i].date;
              let name = ev[i].name;
              console.log(name);
              this.lis.push({ 'name': name, 'description': details, 'imagePath': image, 'extlink': link, 'date':date })
            }
            console.log(this.lis)
          }
        )
      }
    )

  }

}

