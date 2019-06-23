import {Component, OnInit} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';
import {TimeService} from './time.service';
import {Time} from './table-regiter/table-register.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CLUSTER';
  op = {
    maxZoom: 18,
    attribution: '...',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoianVsaWFubWFydGluZXoiLCJhIjoiY2p4MXcyOGhqMGU2bjN5cXBsODZqNjA0OCJ9.FegVzw-HpeTqYeAZWSboHw'
  };
  options = {
    layers: [
      tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', this.op)
    ],
    zoom: 10,
    center: latLng(-17.3835, -65.9609)
  };
  histories: Time[];
  point;
  pos;
  datas: ClusterTime[];
  layer;
  constructor(private dataService: TimeService) {
    this.histories = this.dataService.getData();
  }

  ngOnInit(): void {
  }
  clicked(evt) {
    this.point = {x: evt.originalEvent.layerX, y: evt.originalEvent.layerY};
    this.pos = {lat: evt.latlng.lat, lng: evt.latlng.lng};
  }
  getPoint() {
    return this.point;
  }
  getPos() {
    return this.pos;
  }
  process(register: Time) {
    this.pos = null;
    this.point = null;
    this.layer = null;
    this.datas = this.dividerPoint(this.dataService.pushData(register));
    const actualGroup = this.findInGroup(register);
    this.layer = marker([ register.lat, register.lng ], {
      icon: icon({
        iconSize: [ 40, 40 ],
        iconAnchor: [ 20, 40 ],
        iconUrl: actualGroup.icon,
        // shadowUrl: ''
      })
    });
  }
  dividerPoint(clusters) {
    const re = [];
    clusters.forEach((r, index) => {
      let group: ClusterTime;
      if (index === 0) {
         group = {
          title: 'Lluvioso',
          centroid: r.centroid,
          points: this.findData(r.points),
           icon: 'assets/lluvioso.png'
        };
      }
      if (index === 1) {
        group = {
          title: 'Soleado',
          centroid: this.findOneData(r.centroid[0]),
          points: this.findData(r.points),
          icon: 'assets/soleado.png'
        };
      }
      if (index === 2) {
        group = {
          title: 'Mayormente Nublado',
          centroid: this.findOneData(r.centroid[0]),
          points: this.findData(r.points),
          icon: 'assets/nublado.png'
        };
      }
      re.push(group);
    });
    return re;
  }
  findData(times: [any]) {
    const res = [];
    times.forEach(r => {
      res.push(this.findOneData(r[0]));
    });
    return res;
  }
  findOneData(dia) {
   return this.dataService.datos.find(r => {
     return r.dia === dia;
   });
  }
  findInGroup(point) {
    return this.datas.find(r => {
      return r.points.includes(point);
    });
  }
}
export interface ClusterTime {
  title: string;
  centroid: any;
  points: Time[];
  icon: string;
}
