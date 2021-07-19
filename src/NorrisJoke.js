import React,{ useState, useEffect } from 'react';
import axios from 'axios';

export default function NorrisJoke() {
    console.log('This component has been rendered');
   

      const [joke1, setJoke1] = useState('')
      

      useEffect( () => {
          axios.get('http://api.icndb.com/jokes/random',{headers: {Accept: 'application/json'}})
          .then(res => (res.data))
          .catch(err => console.log(err))
      }, [])

        const fetchJoke1 = () => {
          axios.get('http://api.icndb.com/jokes/random',{headers: {Accept: 'application/json'}})
          .then(res => (res.data))
          .catch(err => console.log(err))
        }
    return (
        <div>
            <div className="card">
  <h5 className="card-header">Chuck Norris Joke</h5>
  <div className="card-body">
    <p className="card-text">{joke1.joke1}</p>
    <a href="#" className="btn btn-primary" onClick={fetchJoke1}>Get Joke</a>
  </div>
</div>
        </div>
    )
}
