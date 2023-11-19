import { BookHotel } from "business/hotel/types"
import { HotelApi } from "../api"

export const useBookHotel = () => {
    
    const bookHotel = (bookingHotel: BookHotel) => {
        return HotelApi.book(bookingHotel)
    }
    return {
        bookHotel
    }
}