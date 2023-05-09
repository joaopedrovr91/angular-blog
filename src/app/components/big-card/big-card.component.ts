import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit{
  @Input()
  photoCover = "";
  @Input()
  cardTitle = "";
  @Input()
  cardDescription = "";
  @Input()
  Id:string = "0";
  @Input()
  Card:string = "0";

  constructor() {}

  ngOnInit(): void {

  }

}
