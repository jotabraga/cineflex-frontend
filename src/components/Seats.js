import image3 from "../images/image3.jpg"

export default function Seats(){
    return(
        <div className="seats-selection-screen">

            <div className="selection">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <ul className="seats">
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>

                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>

                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>

                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>

                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
                <li className="seat-id">01</li>
            </ul>
            <div className="seats-subtitle"></div>



            <div className="session">
            <p className="session-title">Nome do comprador:</p>
            <input type="text" className="user-info" placeholder="Digite seu nome..." />
            </div>

            <div className="session">
            <p className="session-title">CPF do comprador:</p>
            <input type="text" className="user-info" placeholder="Digite seu CPF..." />
            </div>

            {/* <button className="book-seats">Reservar assento(s)</button> */}


            <div className="footer">
            <div className="movie-box">
            <img src={image3} alt="movie"></img>
            </div>
            <p>Enola Homes</p>
            </div>

        </div>
    );
}