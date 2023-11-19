import { Button } from "antd";
import HotelCard from "business/hotel/components/hotel-card";
import { useGetHotelDetails } from "business/hotel/services/hooks/useGetHotelDetail";
import React from "react";
import Flex from "ui/flex";

interface HotelDetailProps {
  id: string;
}

const HotelDetail: React.FC<HotelDetailProps> = ({ id }) => {
  const { hotel } = useGetHotelDetails(id);

  console.log(hotel);
  if (!hotel) {
    return null;
  }

  return (
    <Flex direction="vertical">
      <HotelCard hotel={hotel} onClick={() => {}} />
      <Button>Book</Button>
    </Flex>
  );
};

export default HotelDetail;
