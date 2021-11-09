import {Component, Input} from '@angular/core';

export enum InputType {
  Name = 'name',
  Date = 'date',
  Currency = 'currency',
  Price = 'price'
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  host: {
    class: 'input'
  }
})
export class InputComponent {
  @Input() type: InputType = InputType.Name;
  constructor(
  ) {

  }
}
