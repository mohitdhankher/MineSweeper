import React,{useEffect,useState,useCallback} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from "../src/Table";
import styled from 'styled-components'
import { useSelector } from "react-redux";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
const Styles = styled.div`
  padding: 1rem;

  .Header {
    background-color: lightgrey;
    color: #31a3c7;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
export default function SimpleTabs(props) {
 
  const classes = useStyles();
  const counter = useSelector(state => state);
  const [value, setValue] = React.useState(0);
  const [futurearray, setfuturearray] = React.useState(props.futurearr);
  const handleChange = (event, newValue) => {
   
    setValue(newValue);
    
  };
 
if(counter!=''){
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Upcoming Campaigns" {...a11yProps(0)} />
          <Tab label="Live Campaigns" {...a11yProps(1)} />
          <Tab label="Past Campaigns" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <Styles> <Table columns={props.columns} data={counter.futurearr} /></Styles>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Styles> <Table columns={props.columns} data={counter.Currentarr} /></Styles>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Styles> <Table columns={props.columns} data={counter.pastarr} /></Styles>
      </TabPanel>
    </div>
  );
}
else{
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Upcoming Campaigns" {...a11yProps(0)} />
          <Tab label="Live Campaigns" {...a11yProps(1)} />
          <Tab label="Past Campaigns" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <Styles> <Table columns={props.columns} data={props.futurearr} /></Styles>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Styles> <Table columns={props.columns} data={props.Currentarr} /></Styles>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Styles> <Table columns={props.columns} data={props.pastarr} /></Styles>
      </TabPanel>
    </div>
  );
}
}


