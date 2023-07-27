import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button [ngClass]="{ 'class-for-x': value === 'X', 'class-for-o': value === 'O' }">{{ value }}</button>
`,
  styles: []
})
export class SquareComponent {

  @Input() value: "X" | "O" = "O";



}
