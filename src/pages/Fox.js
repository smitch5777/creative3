import axios from 'axios'
import { useState } from 'react'
import DuckImg from './duckImg';
import ReactDOM from "react-dom/client";
import './home.css'

const Fox = () => {
  const [imgsrc, setsrc] = useState("https://randomfox.ca/images/22.jpg");
  const [isLoading, setLoading] = useState(false);

  var url = "https://randomfox.ca/floof";
  console.log("URL " + url);

  const handleSubmit = async(event) => {
    setLoading(true);
    axios.get(url)
    .then((response) => {
      console.log("Object img");
      console.log("url: " + JSON.stringify(response.data.image));
      setsrc(response.data.image);
      console.log(imgsrc);
      setLoading(false);
    });
    event.preventDefault();
  }
    return (
      <div>
            <h1>Home of Foxes</h1>
            <button class="duck-button" onClick={handleSubmit}>New Random Fox</button>
            <br></br>
            <DuckImg isLoading = {isLoading} imgsrc={imgsrc}/>
            </div> 
    )
    
  };
  
  export default Fox;