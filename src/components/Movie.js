import { Link } from "react-router-dom";

export default function Movie(props){

    const {movieImage, id} = props;

    return(

        <Link to="/filme/{id}"

        
        <div className="movie-box">
            <img src={movieImage} alt={id}></img>
        </div>

        </Link>

    );
}