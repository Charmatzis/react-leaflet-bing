# react-leaflet-bing
Bing layer as React component for Leaflet  build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet).


# Getting started

```
import { Map,  TileLayer, LayersControl } from 'react-leaflet'
import {BingLayer} from '../src'
const { BaseLayer } = LayersControl;

...
const bing_key = "YOUR-BING-KEY"
...

<BaseLayer checked name='Bing Maps Roads'>
  <BingLayer  bingkey={bing_key} type="Road"/>
</BaseLayer>
<BaseLayer checked name='Bing Maps Satelite'>
    <BingLayer  bingkey={bing_key} />
</BaseLayer>
<BaseLayer checked name='Bing Maps Satelite with Labels'>
    <BingLayer  bingkey={bing_key} type="AerialWithLabels" />
</BaseLayer>
```

For more details on how to use this plugin check the example.

