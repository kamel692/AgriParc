import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  moduleId: module.id,
  selector: 'maps-cmp',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.css']
})

export class MapsComponent implements OnInit {

  public myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });

  map: any;
  ngOnInit() {

    this.map = L.map('mapid').setView([45.757043, 4.866659], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org    /copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([45.757043, 4.866659], {icon: this.myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(this.map).openPopup();
  }
}
