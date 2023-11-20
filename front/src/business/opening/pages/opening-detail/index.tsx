import { Divider, notification } from "antd";
import BookForm from "business/opening/components/book-form";
import OpeningDescription from "business/opening/components/opening-description";
import { useBookOpening } from "business/opening/services/hooks/useBookOpening";
import { useGetOpeningDetails } from "business/opening/services/hooks/useGetOpeningDetails";
import React from "react";
import Flex from "ui/flex";
import Typography from "ui/typography";

interface OpeningDetailProps {
  openingId: number;
  onBooked: () => void;
}

const OpeningDetail: React.FC<OpeningDetailProps> = ({
  openingId,
  onBooked,
}) => {
  const { opening } = useGetOpeningDetails(openingId);
  const { bookOpening } = useBookOpening();

  if (!opening) {
    return null;
  }
  console.log(opening);

  const onBook = async ({ date }: { date: Date }) => {
    try {
      await bookOpening({
        date,
        openingId: opening.id,
        userId: 1,
      });
      onBooked();
      notification.success({ message: "Hôtel réservée !" });
    } catch (err) {
      notification.error({ message: "Oups erreur" });
    }
  };

  return (
    <Flex direction="vertical">
      <OpeningDescription opening={opening} />
      <Divider />
      <Typography.Title level={3}>Réservations</Typography.Title>
      <BookForm
        onFinish={onBook}
        bookableDays={opening.sale_dates.bookable_days}
      />
    </Flex>
  );
};

export default OpeningDetail;
