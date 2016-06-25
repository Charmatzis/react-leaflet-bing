import React from 'react';
import { Map, Circle, TileLayer, LayersControl } from 'react-leaflet'
import {BingLayer} from '../src'

const { BaseLayer, Overlay } = LayersControl;


export default class BingExample extends React.Component {

  constructor() {
    super();
    this.state = {
      geodata: null,
      isadded: false
    }
  }


  
  render() {
    const bing_key = "YOUR-BING-KEY"
    return (
      
        <Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
          <LayersControl position='topright'>
            <BaseLayer  name='OpenStreetMap.Mapnik'>
              <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Roads'>
              <BingLayer  bingkey={bing_key} type="Road"/>
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Satelite'>
              <BingLayer  bingkey={bing_key} />
            </BaseLayer>
            <BaseLayer checked name='Bing Maps Satelite with Labels'>
              <BingLayer  bingkey={bing_key} type="AerialWithLabels" />
            </BaseLayer>
          </LayersControl>
        </Map>
    )
  }
}
