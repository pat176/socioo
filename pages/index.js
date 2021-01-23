import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Socioo | Quiz Game to imbibe social skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.image}>
        <Image
          src="/public/horizontal_on_white_by_logaster.png"
          height="auto"
          width={300}
        />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>Wanna test your social skills?</h1>
        <Link href="/meet-genie">
          <a className={styles.btn}>Do it by playing a simple quiz game</a>
        </Link>

        <div className={styles.grid}>
          <button className={styles.card}>
            <h3>Purpose of the game</h3>
            <p>
              Many students lack social skills nowadays. This game is designed
              to help students gain some essential social skills
            </p>
          </button>

          <button className={styles.card}>
            <h3>How to play?</h3>
            <p>
              You'll be given a 20 situation based questions one by one along
              with 4 options and you'll have to choose one of them and according
              to the chosen option we'll tell you if you lack any social skills
              or not
            </p>
          </button>

          <button className={styles.card}>
            <h3>Categories:</h3>
            <p>
              We've made 4 categories to tell you where you stand in terms of
              social skills. These are: Grandmaster,Master,Professional,Amatuer.
              The category in which you stand will be told by our socioo genie
              at the end of the Game
            </p>
          </button>

          <button className={styles.card}>
            <h3>How many times you can play?</h3>
            <p>Well, infinite times!</p>
          </button>
        </div>
      </main>
    </div>
  );
}
