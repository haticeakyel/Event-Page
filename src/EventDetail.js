import { Button, Container, IconButton } from '@mui/material';
import React from 'react'
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import { LocationOn } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    img: {
        width: "500px",
         zIndex: 3
    },
    blackBox: {
        padding:0,
        backgroundColor:"black",
        color:"white",
        zIndex: 1,
        height:"400px",
        width:"400px"
    },
    date:{
        zIndex: 2
    }
}));
function EventDetail(props) {
    const {
        event
    } = props;

    const classes = useStyles();
    return (
        <Container>
            <div className={classes.container}>

                <div className={classes.blackBox}>

                    <p className={classes.date}>{new Date(event.date).toLocaleDateString('tr-TR', { weekday: 'long', month: 'long', day: 'numeric' })}</p>

                    <p className={classes.date}>{event.time}</p>

                </div>
                <div>
                    <p>{event.type}</p>
                    <img className={classes.img} src={event.src} />
                </div>
                <div>
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
                            marginBottom:"15px"
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