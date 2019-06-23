import { Injectable } from '@angular/core';
import {Time} from './table-regiter/table-register.component';
import clusterMaker from 'clusters';


@Injectable({
  providedIn: 'root'
})
export class TimeService {
  datos: Time[] = [
    {
      dia: 1,
      viento: 6.957848256,
      humedad: 0.034585158,
      precipitacion: 0.147200698,
      temperatura: -2,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 2,
      viento: 18.6927167,
      humedad: 0.023058363,
      precipitacion: 0.371228693,
      temperatura: 2,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 3,
      viento: 1.117531688,
      humedad: 0.778218255,
      precipitacion: 0.874012126,
      temperatura: -1,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 4,
      viento: 19.33833329,
      humedad: 0.198027418,
      precipitacion: 0.348344742,
      temperatura: 30,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 5,
      viento: 2.542022994,
      humedad: 0.154501751,
      precipitacion: 0.233146399,
      temperatura: 7,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 6,
      viento: 0.129548581,
      humedad: 0.651758167,
      precipitacion: 0.044023416,
      temperatura: 25,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 7,
      viento: 4.447814112,
      humedad: 0.117271522,
      precipitacion: 0.609942222,
      temperatura: 17,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 8,
      viento: 5.434795246,
      humedad: 0.870086398,
      precipitacion: 0.489350181,
      temperatura: 11,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 9,
      viento: 13.76463189,
      humedad: 0.970538342,
      precipitacion: 0.87171607,
      temperatura: 14,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 10,
      viento: 9.655232072,
      humedad: 0.874463261,
      precipitacion: 0.926281251,
      temperatura: 1,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    },
    {
      dia: 11,
      viento: 14.50705077,
      humedad: 0.292189177,
      precipitacion: 0.964734923,
      temperatura: 18,
      lat: -17.401424951347586,
      lng: -66.14730834960939
    }
    ];
  constructor() { }
  getData() {
    return this.datos;
  }
  calculcate(): any {
    clusterMaker.k(3);
    clusterMaker.iterations(10000);
    clusterMaker.data(this.convertArray());
    const clusters = clusterMaker.clusters();
    const titles = {
      temp: 'Temperatura',
      pressure: 'Presion',
      wind: 'Velocidad de Viento',
    };
    return clusters;
  }
  pushData(data) {
    this.datos.push(data);
    return this.calculcate();
  }
  convertArray() {
    const list = [];
    this.datos.forEach(res => {
      const li: any = [];
      li.push(res.dia);
      li.push(res.viento);
      li.push(res.humedad);
      li.push(res.precipitacion);
      li.push(res.temperatura);
      li.push(res.lat);
      li.push(res.lng);
      list.push(li);
    });
    return list;
  }
}
