import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/home");
        const homeData = await response.json();

        setHomeData(homeData);
      } catch (error) {
        console.error("Não foi possível buscar os dados na API");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-home">
      <div className="header-home">
        <h2>Home</h2>
      </div>
      <div className="content-home">
        {homeData.map((item) => (
          <div key={item.id} className="item-home">
            <div className="line-item-home">
              <p>Nome:</p>
              <p>{item.nome}</p>
              <p>{item.sobrenome}</p>
            </div>

            <div className="line-item-home">
              <p>Saldo: </p>
              <p>
                {parseFloat(item.saldo).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
