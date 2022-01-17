import ReactMapGL from 'react-map-gl';

function Map() {

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/akkiscrystal/ckyhz0joh1gpk14l058neobzi'
      mapboxApiAccessToken={process.env.mapbox_key}
    >

    </ReactMapGL>
  )
}

export default Map;
