import ArticlePart from "@/components/ArticlePart";
import Calculator from "@/components/Calculator";
import Container from "@/components/Container";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ALL_PACKAGES, COMPANY_NAME, COMPANY_TITLE, COMPANY_PHRASE, PACKAGES_HEADING, PAGE_PARTS, COMPANY_SUBTITLE } from "@/constants/constants";
import styles from "@/styles/Home.module.scss";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

const ServicesTable = dynamic(() => import("@/components/PackagesTable"), {
    ssr: false,
});

const Services = dynamic(() => import("@/components/Services"), {
    ssr: false,
});

const About = dynamic(() => import("@/components/About"), {
    ssr: false,
});

export default function Home() {
    const packagesHeadings = Object.keys(PACKAGES_HEADING).map(
        (packageType) => ALL_PACKAGES.find((packageItem) => packageItem.packageId === packageType)?.title
    );
    return (
        <>
            <Head>
                <title>Report Partner</title>
                <meta name="description" content={COMPANY_PHRASE} />
                <meta
                    name="keywords"
                    content="бухгалтерия, бухгалтерские услуги, налоговая отчетность, налоговый учет, бухгалтерский учет, аутсорсинг бухгалтерии, финансовое консультирование, кадровый учет, зарплата и управление персоналом"
                />
                <meta property="og:title" content={COMPANY_NAME} />
                <meta property="og:description" content={COMPANY_PHRASE} />
                <meta property="og:image" content="/RP_logo_abbr.webp" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content={COMPANY_NAME} />
                <meta name="twitter:description" content={COMPANY_PHRASE} />
                <meta name="twitter:image" content="RP_logo_abbr.webp" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/RP_logo.webp" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <header className={styles.hero}>
                    <div className={styles.backgroundContainer}>
                        <div className={styles.imageContainer}>
                            <Image src="/heroBackground.webp" alt="" fill priority className={styles.background} />
                        </div>
                    </div>
                    <div className={styles.topographicContainer}>
                        <div className={styles.imageContainer}>
                            <Image src="/topographic1.webp" alt="" fill priority className={styles.topographic} />
                        </div>
                    </div>
                    <div className={styles.symbolsContainer}>
                        <Container style={{ width: "100%", height: "100%" }}>
                            <div className={styles.imageContainer}>
                                <Image src="/symbols1.webp" alt="" fill priority className={styles.symbols} />
                            </div>
                        </Container>
                    </div>
                    <div className={styles.blurredCircle} />
                    <div className={styles.textContainer}>
                        <Container>
                            <div className={styles.wrapper}>
                                <h3>{COMPANY_NAME}</h3>
                                <h1>{COMPANY_TITLE}</h1>
                                <h5>{COMPANY_SUBTITLE}</h5>
                            </div>
                        </Container>
                    </div>
                </header>
                <Container>
                    <article className={styles.article}>
                        <ArticlePart title={PAGE_PARTS.calculator.title} id={PAGE_PARTS.calculator.id}>
                            <Calculator />
                        </ArticlePart>
                        <ArticlePart
                            title={PAGE_PARTS.prices.title}
                            id={PAGE_PARTS.prices.id}
                        >
                            <ServicesTable />
                        </ArticlePart>
                        <ArticlePart title={PAGE_PARTS.services.title} id={PAGE_PARTS.services.id} />
                    </article>
                </Container>
                <Services />
                <Container>
                    <article className={styles.article}>
                        <ArticlePart title={PAGE_PARTS.about.title} id={PAGE_PARTS.about.id}></ArticlePart>
                    </article>
                </Container>
                <About />
                <Container>
                    <article className={styles.article}>
                        <ArticlePart id={PAGE_PARTS.contact.id}>
                            <EmailForm />
                        </ArticlePart>
                    </article>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </Container>
            </main>
        </>
    );
}
