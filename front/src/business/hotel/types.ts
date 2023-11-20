

export type Hotel = {
  id: number;
  name: string;
  picture_id: string;
  preview: string;
  room: Room;
  stars: number;
  reviews: {
    score: number
  }[]
}

type Room = {
  hotel_id: number;
  id: number;
  name: string;
  opening: Opening
}

type Opening = {
  id: number;
  date: string;
  discount_price: number;
  price: number;
  room_id: number;
  sale_dates: SaleDate
  stock: number;
  sale_id: number;
}

type SaleDate = {
  bookable_days: Date[]
  end_date: string;
  start_date: string;
  id: number;
}

export type BookHotel = {
  userId: number;
  openingId: number;
  date: Date;
};
