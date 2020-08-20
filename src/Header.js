import React from 'react';

 import './App.css';
 import Grid from '@material-ui/core/Grid';
 import Blue from '../src/Assest/blue.png'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '52vh'
  }
};

 
export default function HeaderComp() {
//   var subtitle;
//   const [modalIsOpen,setIsOpen] = React.useState(false);
//   const [modalrow,setModalrow] = React.useState('');
 


 
    return (
      <Grid className="header" container>
          <Grid lg={1}></Grid>
         <Grid className="headerimage"><img src={Blue} height={40} alt="money" /></Grid>
         <Grid>Bluestacks</Grid>
        </Grid>
    );
};
// export default HeaderComp;