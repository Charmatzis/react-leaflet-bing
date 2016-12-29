import React, {PropTypes}  from 'react';
import {TileLayer} from 'react-leaflet';
import {bingLayer} from './leaflet.bing';


export default class BingLayer extends TileLayer {
  static propTypes = {
    bingkey: PropTypes.string.isRequired
  };

  componentWillMount() {
    super.componentWillMount();
    const {map: _map, layerContainer: _lc, bingkey, ...props, } = this.props;
    this.leafletElement = L.bingLayer(bingkey, props); 
  }
}
