import React, {useEffect, useState}  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [pets, setPets] = useState('');

  useEffect(() => {
    const fetchData = async() => {
	const result = await fetch('/pet');
	const body = await result.json();

	console.log("BODY: " +  JSON.stringify(body));
	setPets(body);
    }
    fetchData();
  });

  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	
      </header>
      <div>
        <table>
	<tr>
        	<th>Name</th>
        	<th>Species</th>
	</tr>
	{pets.map((pet, key) => (
          <tr>
             <td>{pet.name}</td>
	     <td>{pet.species}</td>
          </tr>
	))}
        </table>
      </div>
    </div> 
    </React.Fragment>
  );
}

export default App;
