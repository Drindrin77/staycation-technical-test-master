export type Opening = {
  id: number;
  date: Date;
  discount_price: number;
  price: number;
  room_id: number;
  sale_dates: {
    bookable_days: Date[];
    end_date: string;
    start_date: string;
    id: number;
  };
  stock: number;
  sale_id: number;
  rooms: {
    hotel_id: number;
    hotels: {
      id: number;
      name: string;
      stars: number;
      picture_id: string;
      preview: string;
      reviews: {
        id: number;
        hotel_id: number;
        user_id: number;
        score: number;
      }[];
    };
  };
};

export type BookOpening = {
  userId: number;
  openingId: number;
  date: Date;
};
