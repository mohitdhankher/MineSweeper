import React , {useState, forwardRef,useEffect, useRef} from 'react';
// import logo from './logo.svg';
import './App.css';
import Service from '../src/service';

function App() {

 
  // const [count, setCount] = useState(0);
  const [user,setuser] = useState({
    username :'',
    password: ''
  });
  const textInput = useRef();

  useEffect(() => {
    
    // return () => {
      
    // }
  }, [])

  let handleSubmit=(e)=>{
    debugger;
    let x =  textInput.current.compare(user);
    if(x.Pass === user.password){
      alert('Login Succesfully')
    }
    else{
      alert('Login failed')
    }
    debugger;

    console.log(x)
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({user })
  // };
  //   fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
  //   .then(response => response.json())
  //   .then(data => this.setState({ password: data.id }));
  }
  let handleChange=(e)=>{
     let value = e.target.value;
     setuser({...user,
      [e.target.name]: e.target.value.trim()
     });
  }

  const array = [
    { userName:'Mohit' , Pass: '123'},
    { userName:'Rohit' , Pass: '1234'},
]

//  let UI = (user) =>{
//    debugger;
//    return(
//      <div>
//        <li>{user.userName}</li>
//        {/* <ol>{user.password}</ol> */}
//      </div>
//    )
//  } 

  return (
    <div>

      {
        array.map((item ,key)=>{
          return(
          <li key={item.id}>{item.userName}</li>
          )
        })
      }
    <form onSubmit={handleSubmit}>

    <label htmlFor="email">UserName</label>
    <input name="username" type="text" onChange={handleChange} placeholder="Enter User Name" />

    <label htmlFor="email">Password</label>
    <input
      name="password"
      type="password"
      // value={user.password} 
      onChange={handleChange}
      placeholder="Enter your password"
    />
    <button type="submit" >
      Login
    </button>
  </form>
   
    <Service ref={textInput} user = {user}/>
    </div>
  );
}

export default App;
