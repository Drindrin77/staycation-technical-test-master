import api from "technical/api";
export module HotelApi {
  export const fetchHotels = async () => {
    return api.get('/hotels')
  };
}
