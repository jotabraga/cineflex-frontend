import React from "react";
import { useLocation } from "react-router-dom";

export default function Success(){


    const location = useLocation();

    console.log(location.data);
    

    return (
        <div className="success-screen">

        <div className="selection">
            <p>Pedido feito com sucesso!</p>
        </div>

        <p className="session-title">Filme e sessão</p>
        <p className="session-title">{location.data.title}</p>
        <p className="session-title">Filme e sessão</p>

        <p className="session-title">Ingressos</p>
        <p className="session-title">Filme e sessão</p>
        <p className="session-title">Filme e sessão</p>

        <p className="session-title">Comprador</p>
        <p className="session-title">Filme e sessão</p>
        <p className="session-title">Filme e sessão</p>


        <button className="next-button">Voltar pra Home</button>
        

        </div>

    );
}