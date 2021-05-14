
export default function Seat(props){

    const {seatName, seatId, seatCondition, setSelected, selected} = props;
    
    function selectSeat(condition, id){
       
        if(condition === false){

            alert("Assento indisponível");

        }if(selected.includes(seatId) === true){

            const newSelection = [...selected.filter(item => item !== id)];            
            setSelected(newSelection);          

        }if(selected.includes(seatId) === false){

            const newSelection = [...selected, id];
            setSelected(newSelection);
        }
    }
    return (

        <li className={seatCondition === false ? "seat-id unavailable-seat" : (selected.includes(seatId) === true ? "seat-id selected-seat" : "seat-id")} 
        onClick={() => selectSeat(seatCondition, seatId)}>{seatName}</li>

    );
}