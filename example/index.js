import React from 'react';
import { render } from 'react-dom';
import BingExample from "./bing";



const example = (
  <div>
    <h1>React-Leaflet-Bing example</h1>
    <BingExample />
  </div>
)

render(example, document.getElementById('app'));