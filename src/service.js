
import React,{useImperativeHandle,forwardRef}  from 'react';
// import logo from './logo.svg';
// import './App.css';

const Service = forwardRef((props,ref)=> {
 
//   const [count, setCount] = useState(0);
//   const [user,setuser] = useState({
//     username :'',
//     password: ''
//   });
debugger;
//    console.log(props.user);

const array = [
    { userName:'Mohit' , Pass: '123'},
    { userName:'Rohit' , Pass: '1234'},
]


useImperativeHandle(ref, () => ({
 
    compare(user){
        debugger;
        var result = array.find(obj => {
            if (obj.userName === user.username){
                        return obj.Pass
            }
                //     } obj.userName === user.username
          })
        // let  result = array.filter(obj => {
        //     if (obj.userName === user.username){
        //         return obj.Pass
        //     }
        //   })
        return result
    }
 
  }));
// let compare = (username) =>{
//     debugger;
//     array.find(x => x.b === username )
// }



 

  
  return (  
      <div>
          Hi Service
          
      </div> 
  );
});

export default Service;
