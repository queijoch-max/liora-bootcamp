import React, { useState, useMemo } from 'react';

const Map = React.memo(({ options }) => {
  console.log("Rendu de la carte avec les options :", options);
  return <div>Carte centrée sur Lat: {options.center.lat}, Lng: {options.center.lng}</div>;
});

export default function MapContainer() {
  const [zoom, setZoom] = useState(10);

  const mapOptions = useMemo(() => ({
    center: { lat: 48.85, lng: 2.35 },
    showGrid: true,
  }), []);

  return (
    <div>
      <p>Zoom actuel : {zoom}</p>
      <button onClick={() => setZoom(z => z + 1)}>Zoomer</button>
      <hr />
      <Map options={mapOptions} />
    </div>
  );
}