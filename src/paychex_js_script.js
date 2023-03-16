import axios from "axios";

export function fetchData() {
    axios.get('http://100.25.149.123:8501/search')
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }
