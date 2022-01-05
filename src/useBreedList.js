import { useState, useEffect } from 'react';

const localCache = {};

const useBreedList = (animal) => {
  const [breeds, setBreeds] = useState([]);
  

  useEffect(() => {
    if(!animal) setBreeds([]);
    else if(localCache[animal]) setBreeds(localCache[animal]);
    else requestBreeds();
    async function requestBreeds() {
      const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
      const data = await res.json();
      localCache[animal] = data.breeds || [];
      setBreeds(localCache[animal])
    }
  }, [animal])


  return [breeds]
}

export default useBreedList;