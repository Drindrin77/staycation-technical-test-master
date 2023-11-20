import { Col, Modal, Row } from "antd";
import HotelCard from "business/hotel/components/hotel-card";
import { useGetHotels } from "business/hotel/services/hooks/useGetHotels";
import OpeningDetail from "business/opening/pages/opening-detail";
import React from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { Routes } from "technical/router/routes";

interface HotelListProps {}

const HotelList: React.FC<HotelListProps> = () => {
  const { hotels, refetch } = useGetHotels();
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickHotel = (openingId: number) => {
    navigate(generatePath(Routes.HotelDetails, { id: openingId.toString() }));
  };

  const closeModal = () => {
    navigate(Routes.HotelList);
  };

  const onBooked = () => {
    refetch();
    closeModal();
  };

  return (
    <div>
      <Modal
        forceRender
        width={800}
        footer={null}
        onCancel={closeModal}
        open={!!id}
      >
        {id && (
          <OpeningDetail key={id} openingId={Number(id)} onBooked={onBooked} />
        )}
      </Modal>
      <Row gutter={[16, 16]}>
        {hotels.map((hotel) => {
          return (
            <Col md={12} xs={24} lg={8}>
              <HotelCard
                onClick={() => onClickHotel(hotel.room.opening.id)}
                hotel={hotel}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HotelList;
