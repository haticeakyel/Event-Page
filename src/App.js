import React from 'react';
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Events from './Events';

const useStyles = makeStyles((theme) => ({
  img:{
    display:"flex",
    justifyContent:"center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
    <Header/>
    <Events/>
    </div>
  );
}

export default App;
