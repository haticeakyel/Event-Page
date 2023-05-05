import React, { useState } from 'react'
import logo from "./assets/logo.png"
import { makeStyles } from "@mui/styles";
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import TodayIcon from '@mui/icons-material/Today';

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

    }
}));


function Header() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [lastFilteredEvents, setLastFilteredEvents] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("")
    const [lastSearched, setLastSearched] = useState("");

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

   /*  const handleFilteredSearch = () => {

        let rawData = currentSearch;

        let trimmedRawData = rawData.trim();
        let lowerCasedData = trimmedRawData

        let standartizedCurrentSearch = lowerCasedData
        setCurrentSearch(standartizedCurrentSearch);

        if (standartizedCurrentSearch === "") {
            handleShownUsers(pageNumber)
            return;
        }

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
    } */
    return (
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
                        /* onChange={(e) => setCurrentSearch(e.target.value)}
                        onKeyPress={(e) => checkPressedEnter(e.key)} */
                        InputProps={{
                            startAdornment: (
                                <>
                                    <IconButton
                                        size="small"
                                        style={{
                                            display: currentSearch.length > 0 ? "block" : "none",
                                        }}
                                        /* onClick={deleteCurrentSearch} */
                                    >
                                        <ClearIcon
                                            htmlColor="#2F455C"
                                            style={{ fontSize: "18px" }}
                                        />
                                    </IconButton>
                                    <IconButton size="small" /* onClick={handleFilteredSearch} */>
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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                </div>
                <div className={classes.filter}>
                    <TodayIcon />
                    <p>Takvimde Gör</p>
                </div>

            </div>
        </div>
    )
}

export default Header;