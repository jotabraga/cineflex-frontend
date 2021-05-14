import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Success(){

    const location = useLocation();

    return (
        <div className="success-screen">

            <div className="selection">
                <p>Pedido feito com sucesso!</p>
            </div>

            <div className="conference">

                <p className="session-title">Filme e sessão</p>
                <p className="success-info">{location.data.title}</p>
                <p className="success-info">{location.data.day} - {location.data.hour}</p>

                <p className="session-title">Ingressos</p>
                {location.data.seatnum.map(seat => (<p key={seat} className="success-info">Assento {seat}</p>))}                

                <p className="session-title">Comprador</p>
                <p className="success-info">Nome: {location.data.name}</p>
                <p className="success-info">Cpf: {location.data.cpf}</p>
                
            </div>
            <Link to={"/"}>
            <button className="next-button">Voltar pra Home</button>s
            </Link>        

        </div>
    );
}