import { useNavigate } from 'react-router-dom';
import {
  MapContainer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  TileLayer,
  ZoomControl,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useLocalCities } from '../contexts/LocalCitiesContext';
import Flag from './Flag';
import styles from './Map.module.css';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from './Button';
import { useUrlPosition } from '../hooks/useUrlPosition';
import Sidebar from './Sidebar';

function Map() {
  const navigate = useNavigate();
  const { cities } = useLocalCities();
  const [mapPosition, setMapPosition] = useState([0, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(
    function () {
      if (mapLat && mapLng) {
        setMapPosition([mapLat, mapLng]);
      }
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition) {
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      }
    },
    [geolocationPosition]
  );

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className={styles.mapContainer}>
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use your position'}
        </Button>
        <MapContainer
          center={[mapLat, mapLng]}
          zoom={6}
          zoomControl={false}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span style={{ maxHeight: '2.8rem', height: '2.8rem' }}>
                  <Flag countryCode={city.countryCode} />
                </span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}
          <ChangeCenter position={mapPosition} />
          <DetectClick />
          <ToggleSideBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </MapContainer>
        ))
      </div>
    </>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?mode=input&lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

function ToggleSideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const handleClick = () => setIsSidebarOpen(true);

  useMapEvents({
    click: handleClick,
  });

  return null;
}

export default Map;
