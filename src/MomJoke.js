import React,{ useState, useEffect } from 'react';
import axios from 'axios';

export default function MomJoke() {
    console.log('This component has been rendered');
   

      const [joke1, setJoke1] = useState('')
      console.log("this component has been rendered")

      useEffect( () => {
          return axios.get('https://api.yomomma.info/',{headers: {Accept: 'application/json'}})
          .then(res => setJoke1(res.data))
          .catch(err => console.log(err))
      }, [])

        const fetchJoke1 = () => {
            axios.get('https://api.yomomma.info/',{headers: {Accept: 'application/json'}})
          .then(res => setJoke1(res.data))
          .catch(err => console.log(err))
        }
    return (
        <div>
            <div className="card">
  <h5 className="card-header">Mom Joke</h5>
  <div className="card-body">
    <p className="card-text">{joke1.joke1}</p>
    <a href="#" className="btn btn-primary" onClick={fetchJoke1}>Get Joke</a>
  </div>
</div>
        </div>
    )
}
