import { Button, Container, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import { LocationOn } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom:"50px"
    },
    img: {
        maxWidth: "400px",
         zIndex: 3,
         marginLeft:"20%"
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
        marginBottom:"20px",
        marginTop:"50px"
    },
    date:{
        zIndex: 3,
        color:"deeppink",
        fontSize:"20px"
    },
    type:{
        color:"white",
        position:"absolute",
        zIndex:3,
        width:"100px",
        height:"20px",
        marginLeft:"8%",
        fontSize:"16px",
        fontWeight:"bold"
    },
    text: {
        maxWidth: "400px",
         marginLeft:"20%"
    },
    root:{
        paddingTop:"100px"
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

                    <p className={classes.date}>{new Date(event.date).toLocaleDateString('tr-TR', { weekday: 'long', month: 'long', day: 'numeric' })}</p>

                    <p className={classes.date}>{event.time}</p>

                </div>
                <div>
                    <p className={classes.type}>{event.type}</p>
                    <img className={classes.img} src={event.src} />
                </div>
                <div className={classes.text}>
                    <p>{event.name}</p>
                    <div style={{ display: "flex" }}>
                        <IconButton size="small">
                            <LocationOn />
                        </IconButton>
                        <p>{event.place}</p>
                    </div>


                    <p>{event.description}</p>
                </div>
                <div>
                    <Button
                        variant='contained'
                        size='medium'
                        style={{
                            backgroundColor: "deeppink",
                            textAlign: "center",
                            marginBottom:"15px",
                            fontSize:"12px"
                        }}
                    >
                        Bilet Al
                    </Button>

                    <div style={{ display: "flex" }}>
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