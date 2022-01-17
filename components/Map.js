import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';

function Map({ searchResults }) {
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/akkiscrystal/ckyhz0joh1gpk14l058neobzi'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              className="h-7 text-[#BAA360]"
            />
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map;
