import React, { useState } from 'react';
import styles from  './box.module.css';

const Box = (props) => {

    if(props.message === ""){
        return(
            <div className = { styles.textBox }>
                Click on a tab to display content.
            </div>
        )
    } else {
        return(
            <div className= {styles.textBox}>
                Tab {props.message} content is showing here
            </div>
        )
    }
}

export default Box;