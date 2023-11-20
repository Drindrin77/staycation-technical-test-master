import { BookOpening } from "business/opening/types";
import { OpeningApi } from "../api";

export const useBookOpening = () => {
  const bookOpening = (bookingHotel: BookOpening) => {
    return OpeningApi.bookOpening(bookingHotel);
  };

  return {
    bookOpening,
  };
};
