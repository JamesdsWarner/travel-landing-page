import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavMenu from '../components/shared/NavMenu/NavMenu.component';
import Banner from '../components/home/Banner/Banner.component';
import WhatToDo from '../components/home/WhatToDo/WhatToDo.component';
import Footer from '../components/shared/Footer/Footer.component';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Visit London</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <Banner />
        <WhatToDo />
        <Footer />
      </main>
    </div>
  );
}
