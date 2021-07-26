import React, {useState} from 'react'

export default function Navbar(props) {
    const {username, signIn} = props;
    const [inputValue, setInputValue] = useState('')
    return (

        <div>
            {username && <span>Welcome, {username}!</span> || 
            <form onSubmit={(e)=> { e.preventDefault(); signIn(inputValue)}}>
                <input 
                    name="username" 
                    id="username" 
                    placeholder="Enter name" 
                    value={inputValue} 
                    onChange={(e)=> setInputValue(e.target.value)} />
                <button>Sign In</button>
            </form>}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/DadJoke">Dad Jokes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/NorrisJoke">Chuck Norris Jokes</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
