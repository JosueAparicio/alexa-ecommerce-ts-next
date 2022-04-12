import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Router from "next/router";
import Header from "../components/header";

const Home: NextPage = () => {
  const router = Router;
  const goToBack = () => {
    router.back();
  };
  return (
    <div>
      <Head>
        <title>Alexa tienda de ropa Americana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
