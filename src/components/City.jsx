import { useParams, useNavigate } from 'react-router-dom';
import styles from './City.module.css';
import { useEffect } from 'react';
import { useLocalCities } from '../contexts/LocalCitiesContext';
import Flag from './Flag.jsx';
import Spinner from './Spinner';
import Button from './Button';
import { useUrlPosition } from '../hooks/useUrlPosition';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function City() {
  const { id } = useParams(); // 'id' is the name of the param in the Router
  const { getCity, currentCity, isLoading } = useLocalCities();
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );

  const { cityName, countryCode, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>
            <Flag countryCode={countryCode} />
          </span>
          {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div className={styles.buttons}>
        <Button type="back" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
        <Button
          type="primary"
          onClick={() =>
            navigate(`/app/form?mode=edit&id=${id}&lat=${lat}&lng=${lng}`)
          }
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default City;
