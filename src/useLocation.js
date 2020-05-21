import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return { lat, lng, errorMessage };
};

export default useLocation;
