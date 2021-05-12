
import axios from "axios";
import {useState, useEffect} from "react";
import Movie from "./Movie";

export default function MainPage(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

        promise.then((answer) => {
            setMovies(answer.data);
        });
    },[]);

return(
    <div className="movie-selection-screen">

        <div className="selection">
            <p>Selecione o filme</p>
        </div>

        {movies.map(movie => <Movie id={movie.id} movieImage={movie.posterURL} key={movie.id}/>)}

    </div>
);
}