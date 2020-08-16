import React, { Fragment, useState ,useImperativeHandle,forwardRef,useEffect}from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

const KeyboardDatePickerExample=(props)=> {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  let ondatechange=(date)=>{
    setSelectedDate(date)
 
    date.setHours(0, 0, 0, 0)
    let Updata = props.datafull;
    let name = props.row.row.original.name;
    let updatedate =date.getTime(); 
    const index = Updata.findIndex((e) => e.name === name);
    if(index){
    Updata[index].createdOn = updatedate;
    props.datehandle(Updata);
    // props.callBack(true);
    }
  }
 
  return (
    <Fragment>
      <KeyboardDatePicker
        // open={open} 
        clearable
        value={selectedDate}
        onChange={date => ondatechange(date)}
        // minDate={new Date()}
        format="dd/MM/yyyy"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerExample;


