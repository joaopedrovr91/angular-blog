import { Component, OnInit } from '@angular/core';
import { dataFakeBigCard } from 'src/app/data/datafakeBIgCard';
import { dataFakeSmallCard } from 'src/app/data/dataFakeSmallCard';
import { ModalModel } from 'src/app/model/modal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.responsive.component.css']
})
export class HomeComponent implements OnInit{
  constructor() {}

  cardsBig:ModalModel[] = dataFakeBigCard.map((result) => {
    return result
  })

  cardsSmall:ModalModel[] = dataFakeSmallCard.map((result) => {
    return result
  })

  ngOnInit(): void { }


}
