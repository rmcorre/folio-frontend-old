import axios from 'axios';

let state = null;

axios.get('http://192.168.1.73:8080/profiles')
  .then(response => {
    // console.log(response.data.filter(profile => profile.id === 1));
    state = response.data;
    console.log(state);
  });

