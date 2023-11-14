import React, { useState, useEffect } from "react";
import "./Extract.css";

function Extract() {
  const [extractData, setExtractData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/extract");
        const extractData = await response.json();

        setExtractData(extractData);
      } catch (error) {
        console.error("Não foi possível buscar dados na API");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-extract">
      <div className="header-extract">
        <h3>Extrato</h3>
      </div>
      <div className="content-extract">
        <ul>
          {extractData.map((item) => (
            <li key={item.id}>
              <div className="line-item-extract">
                <p>Tipo de movimentação:</p>
                <p>{item.creditType}</p>
              </div>
              <div className="line-item-extract">
                <p>Valor:</p>
                <p>
                  {parseFloat(item.value).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Extract;
