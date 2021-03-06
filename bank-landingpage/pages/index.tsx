import Head from "next/head";
import Image from "next/image";
import { MainComponent } from "../src/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Easybank landing page</title>
        <meta
          name="A web landing page"
          content="Generated by create next app"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="http://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>

      <MainComponent />
    </>
  );
}
