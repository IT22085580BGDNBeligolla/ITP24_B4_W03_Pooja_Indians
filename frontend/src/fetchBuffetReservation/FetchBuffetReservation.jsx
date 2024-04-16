import axios from "axios";

//base url
const baseURL = import.meta.env.VITE_BASEURL;

//get all data from the api
export const getAllBuffetReservations = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/buffet`);
        return res.data.allReservations;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

//make a reservation
export const makeBuffetReservation = async (data) => {

    try {
        const res = await axios.post(`${baseURL}/api/buffet/create`, data);
        return res.newReservation;
    } catch (error) {
        // Handle server error
        console.error('Error making reservation:', error);
        throw new Error('Failed to make reservation. Please check your input and try again.');
    }
};