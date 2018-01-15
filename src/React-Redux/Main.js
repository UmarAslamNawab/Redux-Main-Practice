import React from "react";

export const Main = (props) => {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUserName()}>Change the Username</button>
                            {/*here it is optional to pass the hard coded name in props.changeUserName("Umar Uni Nawab") because we alreay passes it in the <Main /> tag in App.js*/}
                    </div>
                </div>
            </div>
        );
    }
