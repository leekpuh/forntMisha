import './PreHeader.scss'
import React, {useState} from 'react';
import {Button} from '@mui/material'


function PreHeader() {
    // ButtonTypeMap.props.variant
    const buttonStyle = {
        actived: "contained",
        deavited: "outlined"
        
    }

    let [click, setClick] = useState(false)

    return <div className="PreHeader">
        <div className="LoginButton">
            {click
                ? <Button variant="contained" color='warning' onClick={() => {
                    setClick(!click)
                }}>Вход</Button>
                : <Button variant="outlined" color='warning' onClick={() => {
                    setClick(!click)
                }}>Вход</Button>
            }
        </div>
    </div>
}

export default PreHeader
