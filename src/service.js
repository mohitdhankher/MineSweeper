
import React  from 'react';
// import logo from './logo.svg';
// import './App.css';


function Service (props) {
 
//   const [count, setCount] = useState(0);
//   const [user,setuser] = useState({
//     username :'',
//     password: ''
//   });
debugger;
   console.log(props.user);

const array = [
    { userName:'Mohit' , Pass: '123'},
    { userName:'Rohit' , Pass: '1234'},
]


let compare = (username) =>{
    debugger;
    array.find(x => x.b === username )
}



 

  
  return (  
      <div>
          Hi Service
          
      </div> 
  );
}

export default Service;
