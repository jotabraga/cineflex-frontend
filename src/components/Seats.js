import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Seat from "./Seat";
import { Link } from "react-router-dom";

export default function Seats(props){

    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState([]);
    const [seatnum, setSeatnum] = useState([]);
    const [image, setImage] = useState("Image");
    const [title, setTitle] = useState("Title");
    const [weekday, setWeekday] = useState("Weekday");
    const [day, setDay] = useState("Day");
    const [hour, setHour] = useState("Hour");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    function closeOrder(){
        const finalOrder = {
            ids: selected,
            name: name,
            cpf: cpf
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",finalOrder);
        setName("");
        setCpf("");
    }

    function selectSeat(condition){
        if (condition === "false"){
            alert ("Assento indisponível");
        }else{
            setSelected(true);
            setSeatnum(true);
        }
    }

    useEffect(() => {
        
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`);

        promise.then((answer) => {

            setImage(answer.data.movie.posterURL);
            setTitle(answer.data.movie.title);
            setWeekday(answer.data.day.weekday);
            setDay(answer.data.day.date);   
            setHour(answer.data.name);
            setSeats(answer.data.seats);                        
        });
    }, [sessionId]);    

    return(
        <div className="seats-selection-screen">

            <div className="selection">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <ul className="seats">
                {seats.map((seat) => <Seat key={seat.id} seatId={seat.id} selectSeat={selectSeat} seatnum={seatnum} setSeatnum={setSeatnum}
                selected={selected} setSelected={setSelected} seatName={seat.name} seatCondition={seat.isAvailable} />)}                
            </ul>

            <div className="seats-subtitle">
                <div className="subtitle">
                    <li className="seat-id selected-seat">S</li>
                    <p>Selecionado</p>
                </div>

                <div className="subtitle">
                    <li className="seat-id">D</li>
                    <p>Disponível</p>
                </div>

                <div className="subtitle">
                    <li className="seat-id unavailable-seat">I</li>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className="info">
                <p>Nome do comprador :</p>
                <input type="text" onChange={e => setName(e.target.value)} value={name}
                 className="user-info" placeholder="Digite seu nome..." />
            </div>

            <div className="info">
                <p>CPF do comprador :</p>
                <input onChange={e => setCpf(e.target.value)} value={cpf}
                type="text" className="user-info" placeholder="Digite seu CPF..." />
            </div> 

            <Link  to={{pathname: "/sucesso", data: {title, day, seatnum, weekday, hour, name, cpf}}} >  {/* passagem de info via useLocatio */}
                <button onClick={closeOrder} className="next-button">Reservar assento(s)</button>
            </Link>


            <div className="footer">
                
                <div className="movie-box">
                    <img src={image} alt="movie"></img>
                </div>
                <div className="movie-info">
                    <p>{title}</p>                    
                    <p>{day}</p>
                    <p>{hour}</p>
                </div>
            
            </div>

        </div>
    );
}