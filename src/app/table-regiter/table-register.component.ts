import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-regiter',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss']
})
export class TableRegisterComponent implements OnInit {
  @Input() datas: Time[];
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
export interface Time {
  dia: number;
  viento: number;
  humedad: number;
  precipitacion: number;
  temperatura: number;
  lat: number;
  lng: number;
}
