import React, { useState } from 'react'
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    toolbar:{
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block"
        }
    },
    logoSm:{
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    search:{
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "40%",
        [theme.breakpoints.down("sm")]:{
            display: (props)=>props.open ? "flex" : "none",
            width: "70%"
        }
    },
    input:{
        color: "white",
        marginLeft: theme.spacing(1)
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    searchButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    icons:{
        alignItems: "center",
        display: (props)=>props.open ? "none" : "flex"
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({open});
    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>
                    MUI Practice
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    MUI
                </Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder='Search' className={classes.input}/>
                    <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
                </div>
                <div className={classes.icons}>
                    <Search
                        className={classes.searchButton}
                        onClick={()=>setOpen(true)}
                    />
                    <Badge badgeContent={4} color='secondary' className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={12} color='secondary' className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Bank Bálint" src="https://kep.cdn.index.hu/1/0/3885/38854/388540/38854051_2963691_839479055b3327ebfe4b4a01680fa4f3_wm.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
