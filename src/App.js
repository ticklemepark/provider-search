import './App.css';
import React, { useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  const [baseUrl, setUrl] = useState("/search?")

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function fetchData (){
    let url = baseUrl + `last_name=${lastName}&limit=50`;

    if(firstName){
      url += `&first_name=${firstName}`;
    }
    if(city){
      url += `&city=${city}`;
    }
    if(state){
      url += `&state=${state}`;
    }


    axios.get(url)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error.response)
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Last Name: 
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
        </label>
        <label>
          First Name: 
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        </label>
        <label>
          City: 
          <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
        </label>
        <label>
          State: 
          <input type="text" value={state} onChange={e => setState(e.target.value)}/>
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>NPI</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result, index) => (
              <tr key={index}>
                <td>{result.first_name}</td>
                <td>{result.last_name}</td>
                <td>{result.address}</td>
                <td>{result.city}</td>
                <td>{result.state}</td>
                <td>{result.zip}</td>
                <td>{result.npi}</td>
                <td>{result.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
