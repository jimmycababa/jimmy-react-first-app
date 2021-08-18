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

// how do i want data to flow in the app
// data in react is top down flow and unidirectional
// option 1 is to handle the auth and database connection in the app component and wherever i need to use it i can pass down props and my component will use that info
// option 2 React Context lets you keep a state separate from display componenets but brings that state into any comp where you need it
// problem with option 1 means that the app is gonna be huge. prop drilling is the danger of doing it all in app
// problem with using option 2 you will need to have context available
// use auth-o for authorization