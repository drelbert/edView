import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>edView Base</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">edView</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>data = progress </code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Manage Students&rarr;</h3>
            <p>Add and Edit</p>
          </a>

          <a href="" className={styles.card}>
            <h3>My Current Students &rarr;</h3>
            <p>View and Manage Case Load</p>
          </a>

          <a href="/students" className={styles.card}>
            <h3>All Students &rarr;</h3>
            <p>Interventions, IEP, Grades</p>
          </a>

          <a href="/dataViews" className={styles.card}>
            <h3>Data Views &rarr;</h3>
            <p>Description</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>Powered by known</a>
      </footer>
    </div>
  );
}
