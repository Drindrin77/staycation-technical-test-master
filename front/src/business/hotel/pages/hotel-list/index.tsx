import { Col, Modal, Row } from "antd";
import HotelCard from "business/hotel/components/hotel-card";
import { useGetHotels } from "business/hotel/services/hooks/useGetHotels";
import React from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { Routes } from "technical/router/routes";
import HotelDetail from "../hotel-detail";

interface HotelListProps {}

const HotelList: React.FC<HotelListProps> = () => {
  const { hotels } = useGetHotels();
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickHotel = (id: number) => {
    navigate(generatePath(Routes.HotelDetails, { id: id.toString() }));
  };

  const onCloseHotel = () => {
    navigate(Routes.HotelList);
  };

  return (
    <div>
      <Modal footer={null} onCancel={onCloseHotel} open={!!id}>
        {id && <HotelDetail id={id} />}
      </Modal>
      <Row gutter={[16, 16]}>
        {hotels.map((hotel) => {
          return (
            <Col md={12} xs={24} lg={8}>
              <HotelCard onClick={() => onClickHotel(hotel.id)} hotel={hotel} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HotelList;
