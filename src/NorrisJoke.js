import React,{ useState, useEffect } from 'react';
import axios from 'axios';

export default function NorrisJoke() {
    console.log('This component has been rendered');
   

      const [joke1, setJoke1] = useState('')
      

      useEffect( () => {
        fetchJoke1()
      }, [])

        function fetchJoke1 (){
          axios.get('https://api.chucknorris.io/jokes/random')//instead of chuck norris api, your own ruby backend
          .then(res => (res.data))
          .then(data => setJoke1(data.value)) 
          .catch(err => console.log(err))
        }
    return (
        <div>
            <div className="card">
  <h5 className="card-header">Chuck Norris Joke</h5>
  <div className="card-body">
    <p className="card-text">{joke1}</p>
    <button className="btn btn-primary" onClick={fetchJoke1}>Get Joke</button>
  </div>
</div>
        </div>
    )
}
