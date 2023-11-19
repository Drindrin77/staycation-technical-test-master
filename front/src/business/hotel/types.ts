export type Hotel = {
  id: number;
  imagePath: string;
  title: string;
  stars: number;
  nbRate: number;
  rate: number;
  preview: string;
  discount: number;
  price: number;
  openingId: number;
  bookableDays: Date[];
};

export type BookHotel = {
  userId: number;
  openingId: number;
  date: Date;
};
