import React from "react";
import "./Pix.css";

function Pix(){
    return(
        <div className="container-pix">
            <div className="header-pix">
                <h2>Pix</h2>
            </div>
            
            <div className="content-pix">
                <div className="realizar-pix">
                    <p>Realizar pix</p>
                </div>
                <div className="receber-pix">
                    <p>Receber Pix</p>
                </div>
            </div>
        </div>
    )
}

export default Pix;