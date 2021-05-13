import { Link } from "react-router-dom";

export default function Session(props){

    const {weekday, date, showtimes} = props;

    return(

        <div className="session">
            <p className="session-title">{weekday} - {date}</p>

            {showtimes.map((hour) => {
                return <Link to={`/assentos/${hour.id}`} key={hour.id} ><button  className="session-hour"><strong>{hour.name}</strong></button></Link> 
            })
            }
            
        </div>
    );
}