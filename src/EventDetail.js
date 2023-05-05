import { Button, Container, IconButton } from '@mui/material';
import React from 'react'
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import { LocationOn } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom:"50px",
        ["@media (max-width: 750px)"]:{
            display: "grid",
            justifyContent: "space-between",
            alignItems: "start",
          },
    },
    img: {
        maxWidth: "400px",
         zIndex: 3,
         marginLeft:"14%",
         borderRadius:5,
         ["@media (max-width: 750px)"]:{
            maxWidth: "250px",
          },
          ["@media (max-width: 450px)"]:{
            height:"160px",
            maxWidth: "280px",
            marginTop:"25%"
          },
    },
    blackBox: {
        padding:0,
        backgroundColor:"black",
        color:"white",
        zIndex: -1,
        height:"335px",
        width:"400px",
        position:"absolute",
        left:"3%",
        marginBottom:"inherit",
        marginTop:"10px",
        borderRadius:5,
        ["@media (max-width: 750px)"]:{
            maxWidth: "350px",
            height:"300px",
        },
        ["@media (max-width: 450px)"]:{
            maxWidth: "340px",
            height:"200px",
          },
    },
    date:{
        zIndex: 3,
        color:"deeppink",
        fontSize:"20px",
    },
    type:{
        color:"white",
        position:"absolute",
        zIndex:3,
        width:"100px",
        height:"20px",
        marginLeft:"8%",
        fontSize:"16px",
        fontWeight:"bold",
        backgroundColor:"red",
        ["@media (max-width: 450px)"]:{
            marginLeft:0,
            maxWidth:50
          },
    },
    text: {
        maxWidth: "400px",
        marginLeft:"10%"
    },
    root:{
        paddingTop:"40px",
        borderBottom:"1px solid grey",
        marginBottom:100,
        borderRadius:5,
        ["@media (max-width: 450px)"]:{
            display:"flex",
            justifyContent:"center",
            paddingTop:"0px",
        },
    },
    description:{
        ["@media (max-width: 450px)"]:{
            maxWidth: "190px",
            whiteSpace:"nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    },
    nan:{
        display:"flex",
        color:"grey",
        ["@media (max-width: 450px)"]:{
            display:"none"
        },
    },
    datesss:{
        ["@media (max-width: 450px)"]:{
            display:"flex",
            marginLeft:"20%",
            fontSize:10,
        },
    },
    name: {
        fontWeight:"bold",
        fontSize:"25px"
    }
}));
function EventDetail(props) {

    const {
        event
    } = props;

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <div className={classes.container}>

                <div className={classes.blackBox}>
                    <div className={classes.datesss}>
                    <p  className={classes.date}>{new Date(event.date).toLocaleDateString('tr-TR', { weekday: 'long', month: 'long', day: 'numeric' })}</p>

                    <p className={classes.date}>{event.time}</p>
                    </div>

                </div>
                <div>
                    <p className={classes.type}>{event.type}</p>
                    <img className={classes.img} src={event.src} alt='img'/>
                </div>
                <div className={classes.text}>
                    <p className={classes.name}>{event.name}</p>
                    <div className={classes.nan}>
                        <IconButton size="small">
                            <LocationOn />
                        </IconButton>
                        <p>{event.place}</p>
                    </div>


                    <p className={classes.description}>{event.description}</p>
                </div>
                <div style={{display:"inline-flex"}}>
                    <Button
                        variant='contained'
                        size='medium'
                        style={{
                            backgroundColor: "deeppink",
                            textAlign: "center",
                            fontSize:"12px"
                        }}
                    >
                        Bilet Al
                    </Button>

                    <div style={{ display: "flex" , alignItems:"center"}}>
                        <IconButton size="small">
                            <AddIcon />
                        </IconButton>
                        Takvime Ekle
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default EventDetail
