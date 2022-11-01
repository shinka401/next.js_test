import Head from "next/head";
import { useCallback } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}