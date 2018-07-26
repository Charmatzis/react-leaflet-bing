# react-leaflet-bing [![npm version](https://img.shields.io/badge/npm-3.1.0-blue.svg)](https://www.npmjs.com/package/react-leaflet-bing)
Bing layer as React component for Leaflet  build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet).

![Bing example](images/example.gif)


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

# Options

option     | type   |   | default
-----------|--------|---|--------------
subdomains | array  |   | [0, 1, 2, 3]
type       | string |One of the following values: <ul><li> Aerial– Aerial imagery.</li><li>AerialWithLabels –Aerial imagery with a road overlay.</li><li>AerialWithLabelsOnDemand - Aerial imagery with on-demand road overlay.</li><li>CanvasDark - A dark version of the road maps.</li><li>- CanvasLight - A lighter version of the road maps which also has some of the details such as hill shading disabled.</li><li>CanvasGray - A grayscale version of the road maps.</li><li>Road – Roads without additional imagery.</li></ul> see: https://msdn.microsoft.com/en-us/library/ff701724.aspx| 'Aerial'
attribution | string |   | 'Bing'
culture     | string | for supported culture codes see: https://msdn.microsoft.com/en-us/library/hh441729.aspx | ''

For more details on how to use this plugin check the example.

