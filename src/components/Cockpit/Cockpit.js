import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasse = [];
    let btnClases = '';
    if(props.showPersons) {
        btnClases = classes.Red;
    }

    if( props.persons.length <= 2){
        assignedClasse.push( classes.Red );
    }
    if( props.persons.length <= 1){
        assignedClasse.push( classes.bold );
    }

    return (
        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasse.join(' ')}>This is really working</p>
            <button 
                className={btnClases}
                onClick={props.clicked}>
                Toggle Persons
                </button>
        </div>
    )
}

export default cockpit;