import { useParams } from 'react-router-dom';
import Session from "./Session";
import {useState, useEffect} from "react";
import axios from "axios";


export default function Sessions(){

    const { movieId } = useParams();
    const [sessions, setSessions] = useState([]);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("title");

    useEffect(() => {
        
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`);

        promise.then((answer) => {
            
            setSessions([...answer.data.days]);
            setImage(answer.data.posterURL);
            setTitle(answer.data.title);
            console.log(answer);    
        });
    }, [movieId]);

    
    console.log(sessions);
    
    return(
        <div className="session-selection-screen">

            <div className="selection">
                <p>Selecione o horário</p>
            </div>
            

            {sessions.length === 0 ? "" : sessions.map((session) => <Session key={session.id} weekday={session.weekday} date={session.date} showtimes={session.showtimes} />)}

            

            <div className="footer">
            <div className="movie-box">
            <img src={image} alt="movie"></img>
            </div>
            <p>{title}</p>
            </div>

           

        </div>
    );
}