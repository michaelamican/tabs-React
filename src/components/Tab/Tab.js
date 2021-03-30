import React, { useState } from 'react';
import styles from './tab.module.css';

const Tab = (props) => {
    
    const clickHandler = (e, item) => {
        
        props.onSelect(item);
    }

    

    const numList = [1,2,3];

    return(
        <ul>{
            numList.map( (item, i) =>
                <li 
                    key={ i } 
                    className={styles.tab} 
                    onClick={
                        (e) => clickHandler(e, item)
                    }>
                    Tab {item}
                </li>
            )
        }</ul>

    );

}

export default Tab;