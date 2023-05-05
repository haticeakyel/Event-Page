import React from 'react';
import { makeStyles } from "@mui/styles";
import Page from "./Page";

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
    <Page/>
    </div>
  );
}

export default App;
