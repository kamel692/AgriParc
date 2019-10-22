import { Component,OnInit } from '@angular/core';

declare var google: any;
declare var ol:any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {



  
    map: any;
    ngOnInit() {
            
        this.map = new ol.Map({
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([4.866659, 45.757043]),
              zoom: 18
            })
          });
    }
}
