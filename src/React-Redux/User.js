import React from 'react';

export const User = (props) => {
    
        return(
            <div>
            <div className="row">
                <div className="col-xs-12">
                <h1>The Page User</h1>
                </div>
                </div>
                <div className="row"> 
                <div className="col-xs-12">
                <p>User Name:{props.username}</p> {/*this .username is coming from app.js*/}
                </div>
            </div>
            </div>
        )
    }

