import axios from "axios";

export function fetchData() {
    axios.get('http://ip-172-31-59-3.ec2.internal:8500/search')
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }
