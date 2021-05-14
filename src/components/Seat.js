
export default function Seat(props){

    const {seatName, seatId, seatCondition, setSelected, selected, setSeatnum, seatnum} = props;
    
    function selectSeat(condition, id, seatName){
       
        if(condition === false){

            alert("Assento indisponível");

        }if(selected.includes(seatId) === true && seatnum.includes(seatName) === true){
           
            setSelected([...selected.filter(item => item !== id)]);   
            setSeatnum([...seatnum.filter(item => item !== seatName)]);   
              
        }if(selected.includes(seatId) === false && seatnum.includes(seatName) === false){

            setSelected([...selected, id]);
            setSeatnum([...seatnum, seatName]);
        }
    }
    return (

        <li className={seatCondition === false ? "seat-id unavailable-seat" : (selected.includes(seatId) === true ? "seat-id selected-seat" : "seat-id")} 
        onClick={() => selectSeat(seatCondition, seatId, seatName)}>
            {seatName}
        </li>
    );
}