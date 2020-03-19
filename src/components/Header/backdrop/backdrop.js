import React from "react";
import '../styles.scss'
const backDrop = props => {
    return (
        <div className='backdrop' onClick={props.click}/>
    )
};

export default backDrop