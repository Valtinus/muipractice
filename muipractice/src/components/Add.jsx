import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Slider, Snackbar, TextField, Tooltip, Typography } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'

const useStyles = makeStyles((theme)=>({
    fab:{
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container:{
        width: "50vh",
        height: "70vh",
        borderRadius: "10px",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down("sm")]:{
            width: "45vh",
            height: "80vh"
        }
    },
    form:{
        padding: theme.spacing(2)
    },
    item:{
        marginBottom: theme.spacing(3)
    },
}))

const selects = [
    {
        value: "Public",
        label: "Public"
    },
    {
        value: "Private",
        label: "Private"
    },
    {
        value: "Friends Only",
        label: "Friend Only"
    }
]

const marks = [
    {
      value: 1,
      label: 'Not at all',
    },
    {
      value: 2,
      label: 'A little',
    },
    {
      value: 3,
      label: 'Kinda',
    },
    {
      value: 4,
      label: 'Pretty burnt out',
    },
    {
        value: 5,
        label: 'Burnt out as hell',
      },
  ];

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [option, setOption] = useState('Public')

    const handleChange = (e) => {
        setOption(e.target.value)
    }
    const [state, setState] = useState({
        openAlert: false
      });

    const { vertical, horizontal, openAlert } = state;


    const handleClick = (newState) => () => {
        setState({ openAlert: true, ...newState });
        setOpen(false)
    };
    
    const handleClose = () => {
        setState({ ...state, openAlert: false });
    };
 
    return (
        <>
            <Tooltip title='Add' aria-label='add' onClick={()=>{setOpen(true)}}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete='off'>
                        <div className={classes.item}>
                            <TextField label="Title" size='small' style={{width: "100%", marginBottom: "15px"}}/>
                            <TextField
                                id='outlined-multiline-static'
                                multiline rows={4}
                                variant="outlined"
                                label="Description"
                                size='small'
                                style={{width: "100%"}}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                select
                                label="Privacy"
                                value={option}
                                onChange={handleChange}
                                helperText="Please select privacy"
                            >
                                {selects.map((opt) => (
                                    <MenuItem key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="anyone" control={<Radio />} label="Anyone" />
                                <FormControlLabel value="friendsonly" control={<Radio />} label="Friends Only" />
                                <FormControlLabel value="noone" control={<Radio />} label="Noone" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Typography>On a scale from 1 to 5 how burnt out are you?</Typography>
                            <Slider
                                aria-label="Restricted values"
                                defaultValue={3}
                                valueLabelDisplay="auto"
                                marks={marks}
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className={classes.item} style={{position: 'absolute', bottom: 10}}>
                           <Button variant="outlined" color="primary" onClick={handleClick()} style={{marginRight: 20}}>Post</Button>
                           <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={openAlert}
                onClose={handleClose}
                message="Posted!"
                key={vertical + horizontal}
            >
                <Alert severity="success">Posted!</Alert>
            </Snackbar>
        </>
    )
}

export default Add
