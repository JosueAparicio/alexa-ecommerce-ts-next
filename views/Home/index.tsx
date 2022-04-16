import React from "react";
import ProductList from "../../components/productList";
import SimpleCard from "../../components/simpleCard";
import Slider from "../../components/slider";
import styles from "../../styles/Home.module.css";
import image1 from "../../public/assets/images/image-example.jpg";
import image2 from "../../public/assets/images/image-example1.jpg";
import Container from "../../components/Container";
const HomePage = () => {
  return (
    <>
      <Slider />

      <Container>
        <>
          <ProductList products={[]} title="Lo mas popular" />

          <div className={styles.gallery}>
            <SimpleCard
              image={image1}
              title="Ropa casual para damas"
              path="/About"
            />
            <SimpleCard image={image2} title="Para ellos" path="/About" />
            <SimpleCard
              image={image1}
              title="Ropa casual para damas"
              path="/About"
            />
            <SimpleCard
              image={image2}
              title="Ropa casual para damas"
              path="/About"
            />
            <SimpleCard
              image={image2}
              title="Ropa casual para damas"
              path="/About"
            />
            <SimpleCard
              image={image1}
              title="Ropa casual para damas"
              path="/About"
            />
            <SimpleCard
              image={image2}
              title="Ropa casual para damas"
              path="/About"
            />
          </div>
          <ProductList products={[]} title="Ofertas del dia" />
          <ProductList products={[]} title="Lo nuevo en calzados" />
        </>
      </Container>
    </>
  );
};

export default HomePage;
