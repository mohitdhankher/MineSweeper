import React , {useState,useEffect,useMemo,useRef} from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleTabs from '../src/service';

import 'date-fns';
// import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardDatePicker
} from '@material-ui/pickers';
import { Button, makeStyles } from "@material-ui/core";
// import DatePicker from "react-datepicker";
 import ModalComp from '../src/Modal';
// import "react-datepicker/dist/react-datepicker.css";
import money from '../src/Assest/money.png'
import increase from '../src/Assest/increase.png'
import DatePicker from "../src/Datepicker";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

function App({fetchProduct}) {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(counter);
  let datas =
   [{
      "name": "Test Whatsapp",
      "region": "US",
      "createdOn": 1596542760000,
      "price": {
        "name" : "Price",
        "onemonth" : '$100',
        "sixmonth" : '$100',
        "oneyear" : '$100',
      },
      "csv": "Some CSV link for Whatsapp",
      "report": "Some report link for Whatsapp",
      "image_url":"Some image url of the campaign" 
    },
    {
      "name": "Super Jewels Quest",
      "region": "CA, FR",
      "createdOn": 1556543760000,
      "price": {
        "name" : "Price",
        "onemonth" : '$100',
        "sixmonth" : '$100',
        "oneyear" : '$100',
      },
      "csv": "Some CSV link for Super Jewels Quest",
      "report": "Some report link for Super Jewels Ques",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Mole Slayer",
      "region": "FR",
      "createdOn": 1599542960000,
      "price": {
        "name" : "Price",
        "onemonth" : '$100',
        "sixmonth" : '$100',
        "oneyear" : '$100',
      },
      "csv": "Some CSV link for Mole Slayer",
      "report": "Some report link for Mole Slayer",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Mancala Mix",
      "region": "US",
      "createdOn": 1596642760000,
      "price": {
        "name" : "Price",
        "onemonth" : '$100',
        "sixmonth" : '$100',
        "oneyear" : '$100',
      },
      "csv": "Some CSV link for Mancala Mix",
      "report": "Some report link for Mancala Mix",
      "image_url":"Some image url of the campaign"
    },{
      "name": " Slayer",
      "region": "FR",
      "createdOn": 1696542760000,
      "price": {
        "name" : "Price",
        "onemonth" : '$100',
        "sixmonth" : '$100',
        "oneyear" : '$100',
      },
      "csv": "Some CSV link for Mole Slayer",
      "report": "Some report link for Mole Slayer",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Maaan Mix",
      "region": "US",
      "createdOn": 1796542760000,
      "price": {
        "name" : "Price",
        "onemonth" : '$100',
        "sixmonth" : '$100',
        "oneyear" : '$100',
      },
      "csv": "Some CSV link for Mancala Mix",
      "report": "Some report link for Mancala Mix",
      "image_url":"Some image url of the campaign"
    }
  ]

  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [staticdata, setstaticdata] = React.useState(datas);
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  let pastarr =[]; 
  let  futurearr =[];
  let currentarr = [];
  var futureDates = () => staticdata.filter(function(date) {
    if(date) {
      const anyTime1 = new Date(date.createdOn).getTime();
      const currentTime1 = new Date().getTime();
      
      // var dt = new Date();
      // var df = new Date(date);
      if(currentTime1 > anyTime1){
        const index = pastarr.findIndex((e) => e.name === date.name);
        if (index === -1) {
          // arr.push(obj);
          pastarr.push(date)
      } else {
          // arr[index] = obj;
      }
            
        }
      else if(currentTime1 < anyTime1){
        const index = futurearr.findIndex((e) => e.name === date.name);
              
               if (index === -1) {
                // arr.push(obj);
                futurearr.push(date)
            } else {
                // arr[index] = obj;
            }
      }
      else
        {
          const index = currentarr.findIndex((e) => e.name === date.name);
              
          if (index === -1) {
           // arr.push(obj);
           currentarr.push(date)
       } else {
           // arr[index] = obj;
       }
        }
      }
 });
 futureDates();
 var UpfutureDates = (data) =>{ 
   pastarr =[]; 
    futurearr =[];
   currentarr = [];
 
   data.filter(function(date) {
   
    

  if(date) {
    const anyTime1 = new Date(date.createdOn).getTime();
    const currentTime1 = new Date().getTime();
    
    // var dt = new Date();
    // var df = new Date(date);
    if(currentTime1 > anyTime1){
      const index = pastarr.findIndex((e) => e.name === date.name);
      if (index === -1) {
        // arr.push(obj);
        pastarr.push(date)
    } else {
        // arr[index] = obj;
    }
          
      }
    else if(currentTime1 < anyTime1){
      const index = futurearr.findIndex((e) => e.name === date.name);
            
             if (index === -1) {
              // arr.push(obj);
              futurearr.push(date)
          } else {
              // arr[index] = obj;
          }
    }
    else
      {
        const index = currentarr.findIndex((e) => e.name === date.name);
            
        if (index === -1) {
         // arr.push(obj);
         currentarr.push(date)
     } else {
         // arr[index] = obj;
     }
      }
    }
})};

 let handler = (data)=> {
   
  setstaticdata(data);
  UpfutureDates(data);
  dispatch({
    type: "Currentarr",
    payload:currentarr
  })
  dispatch({
    type: "pastarr",
    payload:pastarr
  })
  dispatch({
    type: "futurearr",
    payload:futurearr
  })
 
  
  // <SimpleTabs fetchProduct={fetchProduct} columns={columns} pastarr={pastarr} futurearr={futurearr}  currentarr={currentarr} />
         
}


  const [data, setData] = useState(datas);
  const [page, setPage] = useState({});

  const textInput = useRef();
  
  useEffect(() => {
    
    dispatch({
      type: "Currentarr",
      payload:currentarr
    })
    dispatch({
      type: "pastarr",
      payload:pastarr
    })
    dispatch({
      type: "futurearr",
      payload:futurearr
    })
    // (async () => {
    //   const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
    //   setData(result.data);
    // })();
  }, [staticdata]);
  
  var datetodisplay = (value)=>{
   
    var date = new Date(value).toDateString();
    var toadydate = new Date().getTime();
    var passseddate = value;
    var dateobject ={}
    var Difference  = passseddate - toadydate;
    var days  = Math.floor(Difference/1000/60/60/24);
               Difference -= days*1000*60*60*24
    if(days<0){
         dateobject.string = Math.abs(days)+ "days ago"
    }
    else{
      dateobject.string = days+ "days left to start" 
    }
    var  onlydate = date.split(' ').slice(1).join(' ');
    dateobject.onlydate = onlydate;
    return dateobject
  }
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  let openmodal = (row)=>{  
        textInput.current.openModal(row);
      
  }
  // const renderInput = () => {return(<Button>Edit</Button>)}
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: 'createdOn',
        className:'Header', style: {
          fontWeight: 'bolder',
        },
        Cell:({value})=>(<div><div>{datetodisplay(value).onlydate }</div>
                            <div className="fontweigh">{datetodisplay(value).string }</div></div>)
      },{
        Header: "Campaign",
        accessor: "name",
        // accessor1 :"region",
        className:'Header', style: {
          fontWeight: 'bolder',
        },
        
      Cell:row=>(<Grid><Grid>{row.row.original.name}</Grid>
                            <Grid className="fontweigh">{row.row.original.region}</Grid></Grid>)
     
      },
      {
        Header: "View",
        accessor: 'pricing',
        className:'Header', 
        Cell:row=>  (<Grid container><Grid><img src={money} height={40} alt="money" /></Grid><label onClick={() => {
                 {openmodal(row)}
          // console.log(row.original)
          }} >View Pricing</label></Grid>)
      },
      {
        Header: "Action",
        accessor: "csv",
        className:'Header',
         style: {
          fontWeight: 'bolder',
        },
      },
      {
        Header: "",
        accessor: "report",
        Cell:row=>  (<Grid container><Grid><img src={increase} height={40} alt="money" /></Grid><label>Report</label></Grid>),
        className:'Header',
         style: {
          fontWeight: 'bolder',
        },
      },
      
      {
        Header: "Schedule Again",
        accessor: "price",
        className:'Header',
         style: {
          fontWeight: 'bolder',
        },
        Cell:row=>  (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker row={row} datehandle={handler} datafull = {staticdata}/>
        </MuiPickersUtilsProvider>
         
        )
      },
    ],
    []
  );

   


  return (
    <div>
         <SimpleTabs  fetchProduct={fetchProduct} columns={columns} pastarr={pastarr} futurearr={futurearr}  currentarr={currentarr} />
         <ModalComp ref={textInput}/>
       </div>
   
   
   
  );
}

export default App;
