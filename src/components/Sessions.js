import image3 from "../images/image3.jpg"

export default function Sessions(){
    return(
        <div className="session-selection-screen">

            <div className="selection">
                <p>Selecione o horário</p>
            </div>

            <div className="session">
            <p className="session-title">Quinta-feira - 24/06/2021</p>
            <button className="session-hour">15:00</button>
            <button className="session-hour">15:00</button>
            </div>

            <div className="session">
            <p className="session-title">Quinta-feira - 24/06/2021</p>
            <button className="session-hour">15:00</button>
            <button className="session-hour">15:00</button>
            </div>

            <div className="session">
            <p className="session-title">Quinta-feira - 24/06/2021</p>
            <button className="session-hour">15:00</button>
            <button className="session-hour">15:00</button>
            </div>

            <div className="footer">
            <div className="movie-box">
            <img src={image3} alt="movie"></img>
            </div>
            <p>Enola Homes</p>
            </div>

           

        {/* <p className="session-title">Quinta-feira - 24/06/2021</p>
        <div className="all-sessions">
        <button className="session-hour">15:00</button>
        <button className="session-hour">15:00</button>
        </div>
        

        <p className="session-title">Quinta-feira - 24/06/2021</p>
        <button className="session-hour">15:00</button>
        <button className="session-hour">15:00</button> */}

        </div>
    );
}