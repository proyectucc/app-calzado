import { Component } from '@angular/core';

@Component({
  selector: 'app-informes-component',
  templateUrl: './informes.component.html'
})
export class InformesComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
