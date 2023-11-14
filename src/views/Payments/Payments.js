import React from "react";
import "./Payments.css";

function Payments(){
    return(
        <div className="container-payments">
            <div className="header-payments">
                <h2>Pagamentos</h2>
            </div>
            
            <div className="content-payments">
                <div className="realizar-payments">
                    <p>Realizar Pagamentos</p>
                </div>

                <div className="receber-payments">
                    <p>Receber Pagamentos</p>
                </div>
            </div>
        </div>
    )
}

export default Payments;