import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFakeBigCard } from 'src/app/data/datafakeBIgCard';
import { dataFakeSmallCard } from '../../data/dataFakeSmallCard'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";
  private id:string | null = "0";
  Card:string | null = "0";

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))
    this.route.paramMap.subscribe( value => this.Card = value.get("Card"))

    this.setValueToComponent(this.id,this.Card)
  }

  setValueToComponent(id:string | null,Card: string | null) {
    if(Card === "small") {
      const result = dataFakeSmallCard.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    } else {
      const result = dataFakeBigCard.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    }

  }
}
