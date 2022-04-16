import Head from "next/head";
import React from "react";
import Container from "../../components/Container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductPage from "../../views/Product";

const Product = () => {
  return (
    <div>
      <Head>
        <title>Alexa - Sobre Nosotros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        <ProductPage />
      </Container>
      <Footer />
    </div>
  );
};

export default Product;
