import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
const Field = ({id="", label = "", name = "", value = "", onChange }) => {
    return (
       <div className="field">
          
          <label htmlFOR={name}>{label}</label>
          <input id={id} type="text" name={name} value={value} onChange={onChange} />
       </div>
    );
 };

 export default Field;