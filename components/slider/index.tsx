import React, { useState } from "react";
import styles from "./slider.module.css";
import image1 from "../../public/assets/images/slider1.jpg";
import image2 from "../../public/assets/images/slider2.jpg";
import image3 from "../../public/assets/images/slider3.jpg";
import image4 from "../../public/assets/images/slider4.jpg";

import Image from "next/image";

const Slider = () => {
  const [checkeds, setChekeds] = useState(4);

  const handleChangeCheckedRadio = (value: number) => {
    setChekeds(value);
  };

  return (
    <>
      <div className={styles.slider}>
        <input
          type="radio"
          name="slider"
          className={styles.radio}
          onChange={() => handleChangeCheckedRadio(1)}
          checked={checkeds === 1}
        />
        <div className={styles.imgBox}>
          <div className={styles.imgContainer}>
            <Image src={image1} className={styles.img} layout="fill" />
          </div>
          <div className={styles.content}>
            <h2>¡Encuentra lo que te gusta!</h2>
            <p>
              Contamos una amplia variedad de ropa 100% americana para damas, caballeros y niños.
              Estamos seguros de que aqui encontraras lo que mas te gusta! 
            </p>
            <a href="#">Ver mas</a>
          </div>
        </div>
        <input
          type="radio"
          name="slider"
          onChange={() => handleChangeCheckedRadio(2)}
          checked={checkeds === 2}
          className={styles.radio}
        />
        <div className={styles.imgBox}>
          <div className={styles.imgContainer}>
            <Image src={image2} className={styles.img} layout="fill" />
          </div>

          <div className={styles.content}>
            <h2>¡Paga y espera en casa!</h2>
            <p>
              O puedes programar una visita a nuestro local para recoger los
               accesorios que adquirste en linea, elige lo que mas te guste!
            </p>
            <a href="#">Ver mas</a>
          </div>
        </div>
        <input
          type="radio"
          name="slider"
          onChange={() => handleChangeCheckedRadio(3)}
          className={styles.radio}
          checked={checkeds === 3}
        />
        <div className={styles.imgBox}>
          <div className={styles.imgContainer}>
            <Image src={image3} className={styles.img} layout="fill" />
          </div>

          <div className={styles.content}>
            <h2>Camisas 100% americanas!</h2>
            <p>
              Todos nuestros productos son 100% americanos. Compruebalo por ti mismo!
            </p>
            <a href="#">Ver mas</a>
          </div>
        </div>
        <input
          type="radio"
          name="slider"
          onChange={() => handleChangeCheckedRadio(4)}
          className={styles.radio}
          checked={checkeds === 4}
        />
        <div className={styles.imgBox}>
          <div className={styles.imgContainer}>
            <Image src={image4} className={styles.img} layout="fill" />
          </div>

          <div className={styles.content}>
            <h2>Prendas para caballero</h2>
            <p>
            Elige entre algodon, jeans, casual o el tipo de prenda para caballero que prefieras.
            Tenemos lo que estas buscando!
            </p>
            <a href="#">Ver mas</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
