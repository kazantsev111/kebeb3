import React, { useEffect } from 'react';

export default function Map() {

useEffect(() => {
  function init() {
      const myMap = new ymaps.Map('map', {
          center: [55.934954, 37.287370],
          zoom: 10,
      })
  }
  ymaps.ready(init);
}, []);
return <div id="map" style={{ width: '600px', height: '400px' }} />

}