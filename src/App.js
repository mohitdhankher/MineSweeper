import React, { Component } from 'react';
import './App.css';
import Form from  './Form';
import Table from './Table';
import Grid from '@material-ui/core/Grid';
class App extends Component {

    state = {
      formState: {
         id: '',
         firstName: "",
         duration: '7h',
         rating: 6.7,
         mode: "submit"
      },
      users: [
         {
            id: 0,
            firstName: "Hitman",
            duration: "7h",
            rating: "6.7",
            updating: false
         }
      ],
      searchString: "",
   };
   resetFormState = () => {
    this.setState({
       formState: {
          firstName: "",
          duration: "",
          rating: "",
          mode: "submit",
          id: ""
       }
    });
 };

 onChange = event => {
    this.setState({
       formState: {
          ...this.state.formState,
          [event.target.name]: event.target.value
       }
    });
 };

 onSubmit = event => {
    const { users, formState } = this.state;
    event.preventDefault();
    const firstName = event.target.querySelector("input[name='firstName']")
       .value;
    const duration = event.target.querySelector("input[name='duration']")
       .value;
    const rating = event.target.querySelector("input[name='rating']").value;
    debugger;
    if (formState.mode === "submit") {
       let arr = this.state.users;
      //  let index = datas.indexOf(obj)
      // const found = arr.some(el => el.firstName === firstName);
      const i = arr.findIndex(_item => _item.firstName === firstName);
      if (i<=-1) { 
         this.setState({
         users: [
            ...this.state.users,
            {
               firstName,
               duration,
               rating,
               updating: false,
               id: this.state.users[this.state.users.length - 1].id + 1
            }
         ]
      })}
      else{
        arr[i].duration = duration;
        arr[i].rating = rating;
        this.setState({
         users: 
            
            arr
         
      })
      }
     
    } else if (formState.mode === "edit") {
       const index = users.find((user)=> user.id === formState.id).id;
       users[index] = {
                firstName,
                duration,
                rating,
                updating: false,
                id: users[index].id
             }
       this.setState({
          users: [...users]
       });
    }

    this.resetFormState();
 };

 updateUser = key => {
    debugger
    let { users } = this.state;
    users[key].updating = true;

    this.setState({
       formState: { ...this.state.users[key], mode: "edit" },
       users
    });
 };

 deleteUser = key => {
    debugger;
    let { users } = this.state;
    users.splice(key, 1);
    debugger
    this.setState({
       users: [...users]
    });
 };

// handleChange = this.handleChange.bind(this);


componentDidMount=()=> {
  let { users } = this.state;
this.setState({
  users: [...users]
});
this.refs.search.focus();
}

handleChange=()=> {
this.setState({
  searchString: this.refs.search.value
});
}



 render () {
 const { users, formState } = this.state;
 let _user = this.state.users;
 let _users;
 let searchvalue = this.state.searchString;
let search = searchvalue.trim().toLowerCase();
let tableid = false;

if (search.length > 0) {
   debugger
   if(_user){
  _users = _user.filter(function(user) {
    return user.firstName.toLowerCase().match(search);
  });
}
}
    return (
      <div>
       <div>
            <Form
               formState={formState}
               onChange={this.onChange}
               onSubmit={this.onSubmit}
            />
             <Grid container>
          <input
          id="search-input"
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
          <ul>
            {_users ?
              
               <Table
               id= "directory-table"
               users={_users}
               updateUser={this.updateUser}
               deleteUser={this.deleteUser}
               />
               :''
               // <Table
               // id= "no-result"
               // users={_users}
               // updateUser={this.updateUser}
               // deleteUser={this.deleteUser}
               // />

               //  <li>
               //    {l.firstName} <a href="#">{l.email}</a>
               //  </li>
             
            }
          </ul>
        </Grid>
       
            <Table
               id= "directory-table"
               users={users}
               updateUser={this.updateUser}
               deleteUser={this.deleteUser}
            />
         </div>
      </div>
    );
  }
}

export default App;
