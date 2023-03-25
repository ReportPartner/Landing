import { COMPANY_NAME, COMPANY_SUBTITLE, CONTACT_NUMBER, PAGE_PARTS } from "@/constants/constants";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
    const contacts = [
        "info@reportpartner.kz",
        CONTACT_NUMBER,
        'г.Алматы, пр.Аль-Фараби 5, БЦ "Нурлы тау", корпус 2а, офис 201',
    ];

    const getYearRangeFrom = (startYear: number) => {
        const currentYear = new Date().getFullYear();
        if (startYear === currentYear) {
            return `${currentYear}`;
        } else {
            return `${startYear} - ${currentYear}`;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={"/RP_logo.png"} alt="Логотип RP" fill className={styles.logo} />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.companyContainer}>
                    <h3 className={styles.title}>{COMPANY_NAME}</h3>
                    <h5 className={styles.subtitle}>{COMPANY_SUBTITLE}</h5>
                </div>
                <Nav className={styles.linkContainer}>
                    {Object.keys(PAGE_PARTS).map((pagePart) => (
                        <Nav.Link className={styles.link} href={`#${PAGE_PARTS[pagePart].id}`} key={PAGE_PARTS[pagePart].id}>
                            {PAGE_PARTS[pagePart].title}
                        </Nav.Link>
                    ))}
                </Nav>
                <div className={styles.infosContainer}>
                    <div className={styles.socials}>
                        <span>Мы в Instagram:</span>
                        <a href="https://www.instagram.com/reportpartner/" target="_blank">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className={styles.contactInfos}>
                        {contacts.map((contact) => (
                            <h6 key={contact}>{contact}</h6>
                        ))}
                    </div>
                </div>
            </div>
            <h5 className={styles.copyright}>&#169; Copyright {getYearRangeFrom(2023)}, reportpartner.kz</h5>
        </div>
    );
};

export default Footer;
