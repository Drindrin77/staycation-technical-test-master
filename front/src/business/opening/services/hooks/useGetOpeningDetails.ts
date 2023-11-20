/* eslint-disable react-hooks/exhaustive-deps */
import { Opening } from "business/opening/types";
import { useEffect, useState } from "react";
import { OpeningApi } from "../api";

export const useGetOpeningDetails = (openingId: number) => {

  useEffect(() => {
    getOpeningDetail();
  }, []);
  
  const [opening, setOpening] = useState<Opening | null>(null);

  const getOpeningDetail = async () => {
    const Openings = await OpeningApi.getOpeningById(openingId);
    setOpening(Openings.data)
  };

  return {
    opening
  };
};
