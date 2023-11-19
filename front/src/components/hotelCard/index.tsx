import { Tag } from "antd";
import React from "react";
import { calculatePercentageDiscount } from "technical/pricing";
import Flex from "ui/flex";
import StarRating from "ui/star-rating";
import Typography from "ui/typography";

export type Hotel = {
  imagePath: string;
  title: string;
  stars: number;
  nbRate: number;
  rate: number;
  preview: string;
  discount: number;
  price: number;
};
interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({
  hotel: { imagePath, title, stars, nbRate, rate, preview, discount, price },
}) => {
  return (
    <Flex direction="vertical">
      <img src={imagePath} alt="hotelPicture" />
      <Flex justify="space-between">
        <Flex>
          <Typography.Title>{title}</Typography.Title>
          <StarRating stars={stars} />
        </Flex>
        <Typography.Paragraph>{`${rate} (${nbRate})`}</Typography.Paragraph>
      </Flex>
      <Typography.Paragraph>{preview}</Typography.Paragraph>
      <Flex>
        <Typography.Paragraph>{`${discount}€`}</Typography.Paragraph>
        <Typography.Paragraph>{`${price}€`}</Typography.Paragraph>
        <Tag>{`-${calculatePercentageDiscount(price, discount)}‰`}</Tag>
      </Flex>
    </Flex>
  );
};

export default HotelCard;
