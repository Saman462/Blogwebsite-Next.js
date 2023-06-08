import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
