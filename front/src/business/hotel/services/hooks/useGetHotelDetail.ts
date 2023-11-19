import { useGetHotels } from "./useGetHotels";

export const useGetHotelDetails = (id: string) => {
  console.log(id);
  
  const { hotels } = useGetHotels();

  console.log("hotels", hotels);
  
  return {
    hotel: hotels[0],
  };
};
