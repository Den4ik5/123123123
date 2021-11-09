import {Component, Input} from '@angular/core';

export class Comment {
  name: string;
  price: string;
  date: string;
  currency: Currency;

  constructor(name: string, price: string, date: string, currency: Currency) {
    this.name = name;
    this.price = price;
    this.date = date;
    this.currency = currency;
  }
}

export enum Currency {
  USD = 'usd',
  EUR = 'eur',
  RUB = 'rub'
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
  host: {
    class: 'comment'
  }
})
export class CommentComponent {
  @Input() comment?: Comment;
  constructor(
  ) {

  }
}
