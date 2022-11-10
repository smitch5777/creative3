import axios from 'axios'
import { useState } from 'react'
import DuckImg from './duckImg';
import ReactDOM from "react-dom/client";
import './home.css'

const Duck = () => {
  const [imgsrc, setsrc] = useState("https://random-d.uk/api/75.jpg");
  const [isLoading, setLoading] = useState(false);

  var url = "https://random-d.uk/api/v2/random";
  console.log("URL " + url);

  const handleSubmit = async(event) => {
    setLoading(true);
    axios.get(url)
    .then((response) => {
      console.log("Object img");
      console.log("url: " + JSON.stringify(response.data.url));
      setsrc(response.data.url);
      console.log(imgsrc);
      setLoading(false);
    });
    event.preventDefault();
  }
    return (
      <div>
            <h1>Home of Ducks</h1>
            <button class="duck-button" onClick={handleSubmit}>New Random Duck</button>
            <br></br>
            <DuckImg isLoading = {isLoading} imgsrc={imgsrc}/>
            </div> 
    )
    
  };
  
  export default Duck;