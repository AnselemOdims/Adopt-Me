import {useState, useEffect} from 'react';
import Pet from './Pet.js';
import useBreedList from './useBreedList';

const ANIMALS = ['dog', 'cat', 'rabbit', 'parrot']
const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  // console.log(breeds)
  useEffect(() => {
    requestPets()
  }, [])

  const requestPets = async() => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json();
    setPets(json.pets)
  }

  return (
    <div className='search-params'>
      <form onSubmit={e => {
          e.preventDefault();
          requestPets()
        }
      }>
        <label htmlFor='location'>
          Location
        <input id='location' value={location} onChange={e=>setLocation(e.target.value)} placeholder='Location'/>
        </label>
        <label htmlFor='animal'>
          Animals
          <select 
          id='animal'
          value={animal}
          onChange={e=>setAnimal(e.target.value)}
          onBlur={e=>setAnimal(e.target.value)}
          >
          <option/>
          {ANIMALS.map(animal=> <option value={animal} key={animal}>{animal}</option>)}
          </select>
        </label>
        <label htmlFor='breed'>
          Breeds
          <select 
          id='breed'
          value={breed}
          onChange={e=>setBreed(e.target.value)}
          onBlur={e=>setBreed(e.target.value)}
          >
          <option/>
          {breeds.map(breed=> <option value={breed} key={breed}>{breed}</option>)}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map(pet=> <Pet name={pet.name} breed={pet.breed} animal={pet.animal} key={pet.id} />)}
    </div>
  )
}

export default SearchParams;