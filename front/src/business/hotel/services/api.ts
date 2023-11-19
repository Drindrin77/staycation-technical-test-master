import { Hotel } from "../types";

const hotels: Hotel[] = [
  {
    id: "1",
    discount: 160,
    imagePath: "/hotel-picture.png",
    nbRate: 210,
    preview: "Petit dej + champagne + cocktails inclus",
    price: 211,
    rate: 9.6,
    stars: 4,
    title: "Hôtel du Rond point des Champs Elysées",
  },
  {
    id: "2",
    discount: 160,
    imagePath: "/hotel-picture.png",
    nbRate: 210,
    preview: "Petit dej + champagne + cocktails inclus",
    price: 211,
    rate: 9.6,
    stars: 4,
    title: "Hôtel du Rond point des Champs Elysées",
  },
];

export module HotelApi {
  export const fetchHotels = async () => {
    return hotels;
  };
}
