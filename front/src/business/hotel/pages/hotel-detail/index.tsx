import { Button, Checkbox, Form } from "antd";
import HotelCard from "business/hotel/components/hotel-card";
import { useGetHotelDetails } from "business/hotel/services/hooks/useGetHotelDetail";
import React from "react";
import Flex from "ui/flex";
import Typography from "ui/typography";

interface HotelDetailProps {
  id: string;
}

const HotelDetail: React.FC<HotelDetailProps> = ({ id }) => {
  const { hotel } = useGetHotelDetails(id);

  if (!hotel) {
    return null;
  }
  return (
    <Flex>
      <HotelCard hotel={hotel} onClick={() => {}} hover={false} />
      <Flex direction="vertical">
        <Form>
          {hotel.room.opening.sale_dates.bookable_days.map((bookableDay) => {
            return (
              <Form.Item>
                <Checkbox>
                  <Typography.Paragraph>
                    {bookableDay.toString()}
                  </Typography.Paragraph>
                </Checkbox>
              </Form.Item>
            );
          })}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Book
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};

export default HotelDetail;
