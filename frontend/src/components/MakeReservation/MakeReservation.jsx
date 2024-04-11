import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { makeBuffetReservation } from "../../fetchBuffetReservation/FetchBuffetReservation";

// Initialize counter outside of the component so it doesn't reset on every render
let counter = 1;

const MakeReservation = () => {

    const navigate = useNavigate();

    const [buffetReservation, setBuffetReservation] = useState({
        fristname: "",
        lastname: "",
        mobile: "",
        email: "",
        buffetType: "",
        date: "",
        quantity: "",
        price: "",
    }); // Default value is an empty array 

    //make new reservation
    const {mutate , isLoading, isError} = useMutation(makeBuffetReservation,{
        onSuccess : (data) => console.log(data),
    });

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0); // Default price for breakfast
    const [buffetType, setBuffetType] = useState("");

    const buffetPrices = {
        breakfast: 100,
        lunch: 200,
        dinner: 300,
        hightea: 150
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate reservationID
        //const reservationID = String(counter++).padStart(4, '0');

        // Include reservationID in the data sent to the server
        mutate({ buffetReservation });
        navigate("/");
        console.log(buffetReservation);

    };

    return (
        <section>
            <button onClick={() => navigate(-1)} className="absolute top-[2rem] left-[4rem] button px-5 ext-sm">
                Go Back
            </button>

            <div className="flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit} className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:-0">

                    <h1 className="text-center text-xl font-medium">Reservation Form</h1>

                    <input value={buffetReservation.fristname} onChange={(e) => setBuffetReservation({...buffetReservation,fristname:e.target.value})} className="input" type="text" placeholder="First Name" />
                    <input value={buffetReservation.lastname} onChange={(e) => setBuffetReservation({...buffetReservation,lastname:e.target.value})} className="input" type="text" placeholder="Last Name" />
                    <input value={buffetReservation.mobile} onChange={(e) => setBuffetReservation({...buffetReservation,mobile:e.target.value})} className="input" type="number" placeholder="Mobile" />
                    <input value={buffetReservation.email} onChange={(e) => setBuffetReservation({...buffetReservation,email:e.target.value})} className="input" type="email" placeholder="Email" />

                    <div>
                        <p>Buffet Type</p>
                        <select  className="input" type="text" onChange={(e) => {
                            const newBuffetType = e.target.value;
                            setBuffetType(newBuffetType);
                            const newPrice = quantity * buffetPrices[newBuffetType];
                            setPrice(newPrice);
                            setBuffetReservation({...buffetReservation, buffetType: newBuffetType, price: newPrice});
                        }}>
                            <option value="">Choose one</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="hightea">High Tea</option>
                        </select>
                    </div>
                    <div>
                        <p>Date</p>
                        <input value={buffetReservation.date} onChange={(e) => setBuffetReservation({...buffetReservation,date:e.target.value})}  className="input" type="date" />
                    </div>
                    <div>
                        <p>Quantity</p>
                        <input className="input" type="number" placeholder="Quantity" value={quantity} onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            setQuantity(newQuantity);
                            const newPrice = newQuantity * buffetPrices[buffetType];
                            setPrice(newPrice);
                            setBuffetReservation({...buffetReservation, quantity: newQuantity, price: newPrice});
                        }} />
                     </div>
                    <p className="input">Total Amount = {price}</p>
                                    
                    <button type="submit" className="button">Make Reservation</button>
                </form>
            </div>
        </section>
    );
};

export default MakeReservation;
