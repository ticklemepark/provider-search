import './App.css';
import { fetchData } from "./paychex_js_script";
import React, { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
