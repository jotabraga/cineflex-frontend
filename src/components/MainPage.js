import image3 from "../images/image3.jpg"
export default function MainPage(){

return(
    <div className="movie-selection-screen">
        <div className="selection">
            <p>Selecione o filme</p>
        </div>

        <div className="movie-box">
            <img src={image3} alt="movie"></img>
        </div>
        <div className="movie-box">
            <img src={image3} alt="movie"></img>
        </div>
        <div className="movie-box">
            <img src={image3} alt="movie"></img>
        </div>
        <div className="movie-box">
            <img src={image3} alt="movie"></img>
        </div>
        <div className="movie-box">
            <img src={image3} alt="movie"></img>
        </div>
        <div className="movie-box">
            <img src={image3} alt="movie"></img>
        </div>


    </div>
);
}