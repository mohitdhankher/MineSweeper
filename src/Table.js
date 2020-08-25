import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
const Table = ({ users = [], updateUser, deleteUser }) => {
    return (
        <Grid>
           <Grid className="table">
          <Grid className="table-header">
             <Grid container className="row">
                <Grid lg={3} className="column">Movie Name</Grid>
                <Grid lg={3} className="column">Duration</Grid>
                <Grid  lg={3}className="column">Rating</Grid>
                <Grid lg={3} className="column">Options</Grid>
             </Grid>
          </Grid>
          <Grid container className="table-body">
             {users.map((user, key) => {
                return (
                   <Grid container className={`row ${user.updating ? "updating" : ""}`}>
                      <Grid lg={3} className="column">{user.firstName}</Grid>
                      <Grid lg={3} className="column">{user.duration}</Grid>
                      <Grid lg={3} className="column">{user.rating}</Grid>
                      <Grid lg={3} className="column">
                         <button
                            className="icon"
                            onClick={() => updateUser(key)}
                         > 
                         Update
                            <i class="far fa-edit" />
                         </button>
                         <button className="icon" onClick={() => deleteUser(key)}>
                             Delete
                            <i
                               class="fas fa-user-minus"
                               
                            />
                         </button>
                      </Grid>
                   </Grid>
                );
             })}
          </Grid>
       </Grid>
       </Grid>
    );
 };


 export default Table;