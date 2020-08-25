

import React from 'react';
import Field from './Field'
import './App.css';
import NumberFormat from 'react-number-format';
import Grid from '@material-ui/core/Grid';
const Form = ({ formState, onChange, onSubmit }) => {
    return (
       <form className="form" onSubmit={onSubmit}>
          <fieldset>
             <Field
                id="name-input"  
                name="firstName"
                label="user name"
                value={formState.firstName}
                onChange={onChange}
             />
             <Field
             id="duration-input" 
                name="duration"
                label="duration"
                value={formState.duration}
                onChange={onChange}
             />
             <Field
                id="ratings-input" 
                name="rating"
                label="rating"
                value={formState.rating}
                onChange={onChange}
             />
          </fieldset>
          <button>{formState.mode}</button>
       </form>
    );
 };


 export default Form;