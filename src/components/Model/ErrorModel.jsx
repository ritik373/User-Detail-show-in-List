import React from 'react';
import './ErrorModel.css';

const ErrorModel=(props)=>{
    return   <div class="model">
       <header>
        <h1>{props.title}</h1>
        </header>
    <p>{props.message}</p>
    <button onClick={props.onConfirm}>OKay</button>

</div>
}
export default ErrorModel;