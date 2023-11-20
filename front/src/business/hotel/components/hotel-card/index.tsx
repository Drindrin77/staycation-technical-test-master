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
}

const HotelCard: React.FC<HotelCardProps> = ({
  onClick,
  hotel: {
    picture_id,
    name,
    stars,
    preview,
    room: {
      opening: { discount_price, price, stock },
    },
    reviews,
  },
}) => {
  const reviewsSum = reviews.reduce((acc, value) => acc + value.score, 0);
  const averageReviews = (reviewsSum / reviews.length).toFixed(1);

  return (
    <div onClick={onClick} className={styles.container}>
      <Flex direction="vertical" space="s" className={styles.subContainer}>
        <div className={styles.imageContainer}>
          <img src={picture_id} alt="hotelPicture" className={styles.image} />
        </div>
        <Flex direction="vertical" space="s">
          <Flex justify="space-between">
            <Flex space="no-space" style={{ flex: 1 }}>
              <Typography.Title level={5}>{name}</Typography.Title>
              <StarRating stars={stars} />
            </Flex>
            <Typography.Paragraph size="xxs" className={styles.rating}>
              {!!reviews.length && `${averageReviews} (${reviews.length})`}
            </Typography.Paragraph>
          </Flex>
          <Typography.Paragraph size="xs">{preview}</Typography.Paragraph>
          <Flex space="xs">
            <Typography.Paragraph
              size="xs"
              weight="bold"
            >{`${discount_price}€`}</Typography.Paragraph>
            <Typography.Paragraph
              size="xs"
              delete
              className={styles.price}
            >{`${price}€`}</Typography.Paragraph>
            <Tag className={styles.tag}>{`-${calculatePercentageDiscount(
              price,
              discount_price
            )}%`}</Tag>
            <Typography.Paragraph size="xxs">{`Plus que ${stock} en stock`}</Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default HotelCard;
