import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "react-bootstrap";
import ArticlePart from "@/components/ArticlePart";
import Calculator from "@/components/Calculator";
import { PAGE_PARTS } from "@/constants/constants";
import ServicesTable from "@/components/PackagesTable";

export default function Home() {
    return (
        <>
            <Head>
                <title>Report Partner</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/RP_logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <header className={styles.hero}>
                    <div className={styles.backgroundContainer}>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/heroBackground.jpg"
                                alt="Hero block"
                                fill
                                priority
                                className={styles.background}
                            />
                        </div>
                    </div>
                    <div className={styles.topographicContainer}>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/topographic1.png"
                                alt="Hero block"
                                fill
                                priority
                                className={styles.topographic}
                            />
                        </div>
                    </div>
                    <div className={styles.symbolsContainer}>
                        <Container style={{ width: "100%", height: "100%" }}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src="/symbols1.png"
                                    alt="Hero block"
                                    fill
                                    priority
                                    className={styles.symbols}
                                />
                            </div>
                        </Container>
                    </div>
                    <div className={styles.blurredCircle} />
                    <div className={styles.textContainer}>
                        <Container>
                            <div className={styles.wrapper}>
                                <h3>Report Partner</h3>
                                <h1>
                                    Для современного мира начало повседневной
                                    работы.
                                </h1>
                                <h5>
                                    Не вызывает сомнений, что постоянное
                                    информационно-пропогандистское обеспечение
                                    нашей деятельности требует от нас анализа
                                    модели развития. Прежде всего сложившаяся
                                    структура организации.
                                </h5>
                                <Button variant="outline-success">
                                    Узнать больше
                                </Button>
                            </div>
                        </Container>
                    </div>
                </header>
                <Container>
                    <article className={styles.article}>
                        <ArticlePart
                            title={PAGE_PARTS.calculator.title}
                            id={PAGE_PARTS.calculator.id}
                        >
                            <Calculator />
                        </ArticlePart>
                        <ArticlePart
                            title={PAGE_PARTS.prices.title}
                            id={PAGE_PARTS.prices.id}
                        >
                            <ServicesTable />
                        </ArticlePart>
                        <ArticlePart
                            title={PAGE_PARTS.services.title}
                            id={PAGE_PARTS.services.id}
                        >
                            asd ss
                        </ArticlePart>
                        <ArticlePart
                            title={PAGE_PARTS.about.title}
                            id={PAGE_PARTS.about.id}
                        >
                            asd ss
                        </ArticlePart>
                    </article>
                </Container>
                <Container>
                    <footer className={styles.footer}>footer</footer>
                </Container>
            </main>
        </>
    );
}
