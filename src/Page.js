import React, { useEffect, useState } from 'react'
import logo from "./assets/logo.png"
import { makeStyles } from "@mui/styles";
import { Checkbox, FormControlLabel, FormGroup, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import TodayIcon from '@mui/icons-material/Today';
import Events from './Events';
import pink from "./assets/pink.png"
import sener from "./assets/sener.png"
import yasemin from "./assets/yasemin.png"

const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        justifyContent: "center",

    },
    logo: {
        maxWidth: "50px",
        maxHeight: "50px",
    },
    header: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    grey: {
        backgroundColor: "lightgrey",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        marginBottom:"4%"
    },
    filter: {
        display: "flex",
        alignItems: "center",

    },
    title:{
        display:"flex",
        justifyContent:"center",
        fontWeight:"center"
    }
}));


function Page() {
    const [events, setEvents] = useState([
        {
          name: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
          description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
          place:'Maximum UNIQ Hall',
          date: '2023-05-10',
          type:'Tiyatro',
          time: '14:00',
          src: sener
        },{
          name: 'Yasemin Sakallıoğlu',
          description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
          place:'Maximum UNIQ Açık Hava',
          date: '2023-05-7',
          time: '14:00',
          type:'Stand-Up',
          src: yasemin
        },
        {
          name: 'Sinema Keyfi: Rifkin’s Festival',
          description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
          place:'Maximum UNIQ Hall',
          date: '2023-05-1',
          type:'Sinema',
          time: '14:00',
          src: pink
        },
        {
          name: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
          description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
          place:'Maximum UNIQ Lounge',
          date: '2023-05-25',
          type:'Tiyatro',
          time: '14:00',
          src: sener
        },
        {
          name: 'Yasemin Sakallıoğlu',
          description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
          place:'Maximum UNIQ Hall',
          date: '2023-05-2',
          type:'Stand-Up',
          time: '14:00',
          src: yasemin
        },
        {
          name: 'Sinema Keyfi: Rifkin’s Festival',
          description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
          place:'Maximum UNIQ Box',
          date: '2023-05-12',
          type:'Sinema',
          time: '14:00',
          src: pink
        },
      ]);
     
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [lastFilteredEvents, setLastFilteredEvents] = useState(events);
    const [currentSearch, setCurrentSearch] = useState("")
    const [lastSearched, setLastSearched] = useState("");
    const [lastFilteredDates, setLastFilteredDates] = useState(events);

    const today = new Date();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilteredSearch = () => {

        let rawData = currentSearch;

        let trimmedRawData = rawData.trim();
        let lowerCasedData = trimmedRawData

        let standartizedCurrentSearch = lowerCasedData
        setCurrentSearch(standartizedCurrentSearch);

        if (standartizedCurrentSearch === lastSearched) {
            return;
        }

        const filteredEvents = events.filter((event) => event.name.includes(standartizedCurrentSearch))
        setLastFilteredEvents(filteredEvents);

        setLastSearched(standartizedCurrentSearch)
    }

    const checkPressedEnter = (key) => {
        if (key === "Enter") {
            handleFilteredSearch();
        }
    }

    const deleteCurrentSearch = () => {
        setCurrentSearch("");
        setLastFilteredEvents(events)
    } 

    const handleCheck = (event) => {
        if (event.target.checked) {
          switch (event.target.value) {
            case 'uniq-hall':
              console.log('Maximum UNIQ Hall checked');
              setLastFilteredEvents(events.filter((event) => event.place === 'Maximum UNIQ Hall'));
              break;
            case 'uniq-box':
              console.log('Maximum UNIQ Box checked');
              setLastFilteredEvents(events.filter((event) => event.place === 'Maximum UNIQ Box'));
              break;
            case 'uniq-lounge':
              console.log('Maximum UNIQ Lounge checked');
              setLastFilteredEvents(events.filter((event) => event.place === 'Maximum UNIQ Lounge'));
              break;
           
            default:
              break;
          }
        }else{
            setLastFilteredEvents(events)
        }
      };

      const handleCheckDate = (event) => {
        if (event.target.checked) {
          switch (event.target.value) {
            case 'past':
            setLastFilteredEvents(events.filter((event) => new Date(event.date) < today));
            break;
            case 'future':
            setLastFilteredEvents(events.filter((event) => new Date(event.date) > today));
            break;
            default:
              break;
          }
        }else{
            setLastFilteredEvents(events)
        }
      };

    return (
        <>
        <div>
            <div className={classes.item}>
                <img className={classes.logo} src={logo} alt="Logo" />
            </div>
            <div className={classes.item}>
                <p>ETKİNLİKLER</p>
            </div>
            <div className={classes.header}>

                <p>Tüm Etkinlikler</p>
                <p>Tiyatro</p>
                <p>Konser</p>
                <p>Stand Up</p>
                <p>Sinema</p>
                <p>Çocuk</p>
                <div style={{ justifyContent: "end" }}>
                    <TextField size='small'
                        placeholder='Etkinlik Ara'
                        onChange={(e) => setCurrentSearch(e.target.value)}
                        onKeyPress={(e) => checkPressedEnter(e.key)} 
                        InputProps={{
                            startAdornment: (
                                <>
                                    <IconButton
                                        size="small"
                                        style={{
                                            display: currentSearch.length > 0 ? "block" : "none",
                                        }}
                                         onClick={deleteCurrentSearch} 
                                    >
                                        <ClearIcon
                                            htmlColor="#2F455C"
                                            style={{ fontSize: "18px" }}
                                        />
                                    </IconButton>
                                    <IconButton size="small" onClick={handleFilteredSearch}>
                                        <SearchIcon />
                                    </IconButton>
                                </>
                            ),
                        }}
                    />

                </div>
            </div>
            <div className={classes.grey}>
                <div className={classes.filter}>
                    <div>
                        <IconButton size="small" onClick={handleClick} id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}>
                            <FilterListIcon />
                        </IconButton>
                        Filtreler
                    </div>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                    <FormGroup>
                    <p className={classes.title}>Etkinlik Mekanı</p>
                    <FormControlLabel control={<Checkbox/>}  value="uniq-hall" onChange={handleCheck} label="Maximum UNIQ Hall" />
                    <FormControlLabel control={<Checkbox/>} value="uniq-box" onChange={handleCheck} label="Maximum UNIQ Box" />
                    <FormControlLabel control={<Checkbox/>} value="uniq-lounge" onChange={handleCheck} label="Maximum UNIQ Lounge" />
                  </FormGroup>
                  <FormGroup>
                    <p className={classes.title}>Etkinlik Tarihi</p>
                    <FormControlLabel control={<Checkbox/>}  value="past" onChange={handleCheckDate} label="Geçmiş Etkinlikler" />
                    <FormControlLabel control={<Checkbox/>} value="future" onChange={handleCheckDate} label="Gelecek Etkinlikler" />
                  </FormGroup>
                    </Menu>

                </div>
                <div className={classes.filter}>
                    <TodayIcon />
                    <p>Takvimde Gör</p>
                </div>

            </div>
        </div>
        <Events events={lastFilteredEvents}/>
        </>
    )
}

export default Page;