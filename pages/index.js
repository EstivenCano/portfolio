import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my portfolio</title>
        <meta name='description' content='Software developer portfolio' />
        <link rel='icon' href='icons/favicon.ico' />
        <link
          rel='preload'
          href='/fonts/Merienda/Merienda-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Montserrat/MontserratAlternates-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <div>
        <h1>Welcome to my portfolio!</h1>
      </div>
    </div>
  );
}
