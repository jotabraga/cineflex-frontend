export default function Session(props){

    const {weekday, date, showtimes} = props;

    return(

        <div className="session">
            <p className="session-title">{weekday}  -  {date}</p>

            {showtimes.map((hour) => {
                return <button key={hour.id} className="session-hour">{hour.name}</button> 
            })
            }
            
        </div>
    );
}