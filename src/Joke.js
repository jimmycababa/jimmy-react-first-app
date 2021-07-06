import React,{ useState, useEffect } from 'react';
import axios from 'axios';



export default function Joke() {
console.log('This component has been rendered');
   

      const [joke, setJoke] = useState('')
      console.log("this component has been rendered")

      useEffect( () => {
          return axios.get('https://icanhazdadjoke.com/',{headers: {Accept: 'application/json'}})
          .then(res => setJoke(res.data))
          .catch(err => console.log(err))
      }, [])

        const fetchJoke = () => {
            axios.get('https://icanhazdadjoke.com/',{headers: {Accept: 'application/json'}})
          .then(res => setJoke(res.data))
          .catch(err => console.log(err))
        }

    return (
        <div>
            <div className="card">
  <h5 className="card-header">Dad Joke</h5>
  <div className="card-body">
    <p className="card-text">{joke.joke}</p>
    <a href="#" className="btn btn-primary" onClick={fetchJoke}>Get Joke</a>
  </div>
</div>
        </div>
    )
}
