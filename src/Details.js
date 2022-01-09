import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({})
  const params = useParams();

  useEffect(()=> {
    getDetails()
  }, [])

  async function getDetails() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${params.id}`);
    const json = await res.json();
    setLoading(false);
    setDetails(json.pets[0])
  }

  const { name, animal, breed, city, state, description } = details;
  if(loading) {
    return (<h2>Loading...</h2>)
  }
  
  return (
      <div className="details">
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
      </div>
  )
}

export default Details;