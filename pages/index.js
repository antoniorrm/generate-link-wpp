import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div style={{ height: "412px", background: "yellow", padding: "8%" }}>
        <div>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
        <p className={styles.description}>
          <code className={styles.code}>pages/index.js</code>
        </p>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  );
}
