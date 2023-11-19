import { Hotel } from "business/hotel/types";
import { useEffect, useState } from "react";
import { HotelApi } from "../api";

export const useGetHotels = () => {
  useEffect(() => {
    getHotels();
  }, []);
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const getHotels = async () => {
    const hotels = await HotelApi.fetchHotels();
    setHotels(hotels);
  };

  return {
    hotels,
  };
};
