import React from "react";

import styles from "./index.module.scss";
interface StarRatingProps {
  stars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  const starArray = Array.from({ length: stars });

  return (
    <div className={styles.star}>
      {starArray.map((_, index) => (
        <span key={index}>&#9733;</span>
      ))}
    </div>
  );
};

export default StarRating;
