import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/akkiscrystal/ckyhz0joh1gpk14l058neobzi'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

    </ReactMapGL>
  )
}

export default Map;
