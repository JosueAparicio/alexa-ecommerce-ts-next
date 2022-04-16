import Head from "next/head";
import React from "react";
import Container from "../../components/Container";
import Footer from "../../components/footer";
import Header from "../../components/header";

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Alexa - Sobre Nosotros</title>
        <meta name="description" content="Alexa, tienda de ropa americana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default PageLayout;
