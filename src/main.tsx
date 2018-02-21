import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './greet';

ReactDOM.render(
    <h1>{Greet.greet()}</h1>,
    document.getElementById("greet")
)
