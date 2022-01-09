import { useState } from 'react';

const Carousel = (props) => {
  const [active, setActive] = useState(0);

  const defImage = props?.images?.[active] ?? "http://pets-images.dev-apis.com/pets/none.jpg"

  function handleClick(index){
    setActive(index);
  }

  return (
    <div className="carousel">
        <img src={defImage} alt="animal" />
        <div className="carousel-smaller">
          {props?.images?.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={e => handleClick(index)}
            />
          ))}
        </div>
    </div>
  )
}

export default Carousel;