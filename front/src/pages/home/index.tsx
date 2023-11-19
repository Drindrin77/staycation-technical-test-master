import HotelCard, { Hotel } from "components/hotelCard";
import React from "react";

import styles from "./index.module.scss";

interface HomeProps {}

const hotels: Hotel[] = [
  {
    discount: 160,
    imagePath: "",
    nbRate: 210,
    preview: "Petit dej + champagne + cocktails inclus",
    price: 160,
    rate: 9.6,
    stars: 4,
    title: "Hôtel du Rond point des Champs Elysées",
  },
  {
    discount: 160,
    imagePath: "",
    nbRate: 210,
    preview: "Petit dej + champagne + cocktails inclus",
    price: 160,
    rate: 9.6,
    stars: 4,
    title: "Hôtel du Rond point des Champs Elysées",
  },
];
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      {hotels.map((hotel) => {
        return <HotelCard hotel={hotel} />;
      })}
    </div>
  );
};

export default Home;
