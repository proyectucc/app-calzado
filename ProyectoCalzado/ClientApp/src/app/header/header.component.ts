import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * Control de navegacion en pagina
   */
  private readonly location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {}

  /**
   * Método que se ejecuta cuando se da clic en el botón Atrás
   */
  public onBack(): void {
    this.location.back();
  }
}
