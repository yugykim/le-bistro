import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useMemo } from "react";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  })
  const center = useMemo(() => ({ lat: 37.54199, lng: 126.9902 }), []);
  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: "100vw", height: "80vh" }}
        center={center}
        zoom={17}
      >
        { /* Child components, such as markers, info windows, etc. */}
        < Marker position={{
          lat: 37.540799411499385,
          lng: 126.98684562975363
        }} />
      </GoogleMap >
    ) : <></>
  );
}
