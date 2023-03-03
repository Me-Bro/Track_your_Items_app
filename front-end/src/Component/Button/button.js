import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom"
import OldNavBar from '../../Component/NavBar';

const divStyle = {margin: 'auto', position:'absolute', top:'30%', left:'30%'}
const btnstyle = {width:'10rem' , height:'4rem', borderRadius: '10px',}

function ButtonCom() {
    const history = useHistory();

    const oldVersionReturn = () => {
        return (
            <>
                <OldNavBar />
            </>
        )
    }
  return (
        
            <Stack  direction="row" spacing={2}  style={divStyle}>
            <Button variant="contained" color='secondary' style={btnstyle} onClick={() => history.push('/add')} >Add Item</Button>
        <Button variant="contained" color='secondary' style={btnstyle}  >Add Loaction</Button>
        <Button variant="contained" color='secondary' style={btnstyle}>Place Item</Button>
        <Button variant="contained" color='secondary' style={btnstyle} onClick={() => history.push('/oldversion1')}>Old Version</Button>
            </Stack>
        
  )
}

export default ButtonCom