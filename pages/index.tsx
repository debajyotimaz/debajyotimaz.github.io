// import "../styles/globals.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Particles from "../components/particles";
import styles from "../styles/Home.module.css";
import {Navbar} from "../components/navbar/NavBar";
import {Hero} from "../components/Hero";
import Bio from "../components/Bio";
import Interests from "../components/Interests";
import Education from "../components/Education";
import Publications from "../components/Publications";
import News from "../components/News";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Teaching from "../components/Teaching";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debajyoti Mazumder - Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <Particles />
        <div className="min-h-screen text-white backdrop-blur-sm">
        <Navbar />
        <Hero />
        <div className="max-w-full mx-auto p-6 grid gap-8">
          <div className="fade-in min-h-screen">
            <Bio />
          </div>
          <div className="fade-in min-h-screen">
            <Education />
          </div>
          <div className="fade-in min-h-screen">
            <Publications />
          </div>
          <div className="fade-in min-h-screen">
            <News />
          </div>
          <div className="fade-in min-h-screen">
            <Projects />
          </div>
          {/* <div className="fade-in min-h-screen">
            <Teaching />
          </div> */}
          <div className="fade-in min-h-screen">
            <Experience />
          </div>
        </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
