import {getData} from '../api';

getData('users').then(
    response => {
        console.log(response)
    }
).catch(
    error =>{
        console.log(error)  
    }
);

