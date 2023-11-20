import api from "technical/api";
import { BookOpening } from "../types";
export module OpeningApi {
  export const getOpeningById = async (id: number) => {
    return api.get(`/openings/${id}`);
  };
  export const bookOpening = async (bookingInfo: BookOpening) => {
    return api.post('/booking', bookingInfo)
  };
}
