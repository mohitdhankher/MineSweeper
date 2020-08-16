// import React from 'react';	
 const state ={
    Currentarr:'',
    pastarr:'',
    futurearr:''

 }
function reducer(state , action){
switch (action.type) {
    case "Currentarr":
    return {
      ...state,Currentarr: action.payload
    };
    case "pastarr":
    return {...state,
      pastarr:action.payload
    };
    case "futurearr":
    return {...state,
      futurearr:action.payload
    };
    default:
      return '';
  }
}
 
export default reducer;