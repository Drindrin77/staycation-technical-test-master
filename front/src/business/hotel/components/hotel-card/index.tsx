import { Tag } from "antd";
import { Hotel } from "business/hotel/types";
import React from "react";
import { calculatePercentageDiscount } from "technical/pricing";
import Flex from "ui/flex";
import StarRating from "ui/star-rating";
import Typography from "ui/typography";
import styles from "./index.module.scss";

interface HotelCardProps {
  hotel: Hotel;
  onClick: () => void;
  hover?: boolean;
}

const HotelCard: React.FC<HotelCardProps> = ({
  onClick,
  hotel: { imagePath, title, stars, nbRate, rate, preview, discount, price },
}) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <Flex direction="vertical" space="s" className={styles.subContainer}>
        <div className={styles.imageContainer}>
          <img src={imagePath} alt="hotelPicture" className={styles.image} />
        </div>
        <Flex direction="vertical" space="s">
          <Flex justify="space-between">
            <Flex space="no-space" style={{ flex: 1 }}>
              <Typography.Title level={5}>{title}</Typography.Title>
              <StarRating stars={stars} />
            </Flex>
            <Typography.Paragraph
              size="xxs"
              className={styles.rating}
            >{`${rate} (${nbRate})`}</Typography.Paragraph>
          </Flex>
          <Typography.Paragraph size="xs">{preview}</Typography.Paragraph>
          <Flex space="xs">
            <Typography.Paragraph
              size="xs"
              weight="bold"
            >{`${discount}€`}</Typography.Paragraph>
            <Typography.Paragraph
              size="xs"
              delete
              className={styles.price}
            >{`${price}€`}</Typography.Paragraph>
            <Tag className={styles.tag}>{`-${calculatePercentageDiscount(
              price,
              discount
            )}%`}</Tag>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default HotelCard;
