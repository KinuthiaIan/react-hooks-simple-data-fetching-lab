// create your App component here

import { useEffect } from "react"
import React  from "react"
import { useState } from "react"

function App() {
    const[dogImage, setDogImage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
           setDogImage(data.message);
           setIsLoaded(true);
        });
    }, [])   //Empty dependencies array to run the fetch request once
//Showing a loading indicator if data hasn't been loaded.
    if(!isLoaded) 
    return <p>Loading...</p>
  return (
    <div>
   <img src={dogImage} alt="A Random Dog"/> {/*Displaying the image */}
    </div>
  )
}

export default App