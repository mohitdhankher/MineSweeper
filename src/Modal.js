import React,{useImperativeHandle,forwardRef} from 'react';
import Modal from 'react-modal';
 import './App.css';
 import Grid from '@material-ui/core/Grid';
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
 
Modal.setAppElement('#root')
 
const  ModalComp = forwardRef((props,ref)=> {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [modalrow,setModalrow] = React.useState('');
 
  useImperativeHandle(ref, () => ({
 
     openModal(row) {
        
         setModalrow(row)
        
        setIsOpen(true);
      }
 
  }));
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

 
    return (
      <div>
       
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        //   className="modalsize"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>PUBG</h2>
           {
   (() => {
      if (modalrow) {
         return ( <Grid>
                        <Grid><Grid>{modalrow.row.original.name}</Grid>
                        <Grid className="fontweigh">{modalrow.row.original.region}</Grid></Grid>
                    <h2> {modalrow.row.original.price.name}</h2>
                   <Grid container>
                       <Grid lg={6}>1-Week  -  1 Month</Grid>
                       <Grid lg={6}>{modalrow.row.original.price.onemonth}</Grid>
                   </Grid>
                   <Grid container>
                       <Grid lg={6}> 6 Months</Grid>
                       <Grid lg={6}>{modalrow.row.original.price.sixmonth}</Grid>
                   </Grid>
                   <Grid container>
                       <Grid lg={6}>1 Year</Grid>
                       <Grid lg={6}>{modalrow.row.original.price.oneyear}</Grid>
                   </Grid>
                   
                </Grid>);
      }
   })()
}
        
          <button onClick={closeModal} className="modalbutton">close</button>
         
        </Modal>
      </div>
    );
});
export default ModalComp;