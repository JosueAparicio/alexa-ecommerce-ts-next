import Image from "next/image";
import React from "react";
import styles from "./simpleCard.module.css";

interface Props {
  image?: any;
  title?: string;
  path?: string;
}
const SimpleCard = ({ image, title, path }: Props) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imageContent}>
        <Image
          src={image}
          quality={100}
          layout="fill"
          className={styles.image}
        />
      </div>
      <div className={styles.footer}>
        <a href="#">Ver productos</a>
      </div>
    </article>
  );
};

SimpleCard.defaultProps = {
  image: "",
  title: "No Card Title",
  path: "/",
};

export default SimpleCard;
