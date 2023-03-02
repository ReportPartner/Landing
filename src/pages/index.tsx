import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Head>
                <title>Report Partner</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/RP_logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <header className={styles.hero}>
                    <div className={styles.backgroundContainer}>
                        <div className={styles.imageContainer}>
                            <Image src="/heroBackground.jpg" alt="Hero block" fill priority className={styles.background} />
                        </div>
                    </div>
                    <div className={styles.topographicContainer}>
                        <div className={styles.imageContainer}>
                            <Image src="/topographic.png" alt="Hero block" fill priority className={styles.topographic} />
                        </div>
                    </div>
                    <div className={styles.symbolsContainer}>
                        <Container style={{ width: "100%", height: "100%" }}>
                            <div className={styles.imageContainer}>
                                <Image src="/symbols1.png" alt="Hero block" fill priority className={styles.symbols} />
                            </div>
                        </Container>
                    </div>
                    <div className={styles.blurredCircle}/>
                    <div className={styles.textContainer}>
                        <Container>
                            <div className={styles.wrapper}>
                                <h3>Report Partner</h3>
                                <h1>Morem ipsum dolor sit amet, consectetur.</h1>
                                <h5>
                                    Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                                    tellus. Sed dignissim, metus nec fringilla accumsan, risus sem.
                                </h5>
                                <Button variant="outline-success">Узнать больше</Button>
                            </div>
                        </Container>
                    </div>
                </header>
                <Container>
                    <article className={styles.article}>article</article>
                </Container>
                <Container>
                    <footer className={styles.footer}>footer</footer>
                </Container>
            </main>
        </>
    );
}
