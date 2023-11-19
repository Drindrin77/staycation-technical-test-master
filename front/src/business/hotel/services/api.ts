import api from "technical/api";
import { BookHotel } from "../types";
export module HotelApi {
  export const fetchHotels = async () => {
    return api.get('/hotels')
  };
  export const book = async (bookingInfo: BookHotel) => {
    return api.post('/booking', bookingInfo)
  };
}
