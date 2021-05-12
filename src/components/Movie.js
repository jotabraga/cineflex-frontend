
export default function Movie(props){

    const {movieImage, id} = props;

    return(

        <div className="movie-box">
            <img src={movieImage} alt={id}></img>
        </div>

    );
}