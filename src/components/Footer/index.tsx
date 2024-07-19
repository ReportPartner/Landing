import {
    COMPANY_NAME,
    COMPANY_PHRASE,
    CONTACT_NUMBER_MAIN,
    CONTACT_NUMBER_SECOND,
    EMAIL,
    PAGE_PARTS,
} from "@/constants/constants";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import { FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import styles from "./Footer.module.scss";

const getYearRangeFrom = (startYear: number) => {
    const currentYear = new Date().getFullYear();
    if (startYear === currentYear) {
        return `${currentYear}`;
    } else {
        return `${startYear} - ${currentYear}`;
    }
};

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={"/RP_logo.webp"} alt="" fill className={styles.logo} />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.companyContainer}>
                    <h3 className={styles.title}>{COMPANY_NAME}</h3>
                    <h5 className={styles.subtitle}>{COMPANY_PHRASE}</h5>
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
                            <FaInstagram className={styles.icon} /> reportpartner
                        </a>
                    </div>
                    <div className={styles.contactInfos}>
                        <div>
                            <a className={styles.link} href={`mailto:${EMAIL}`}>
                                <GrMail className={styles.icon} />
                                <h6>{EMAIL}</h6>
                            </a>
                        </div>
                        <div>
                            <a className={styles.link} href={`tel:+${CONTACT_NUMBER_MAIN.replace(/\D/g, "")}`}>
                                <FaPhone className={styles.icon} />
                                <h6>{CONTACT_NUMBER_MAIN}</h6>
                            </a>
                        </div>
                        <div>
                            <a className={styles.link} href={`tel:+${CONTACT_NUMBER_SECOND.replace(/\D/g, "")}`}>
                                <FaPhone className={styles.icon} />
                                <h6>{CONTACT_NUMBER_SECOND}</h6>
                            </a>
                        </div>
                        <div>
                            <FaMapMarkerAlt className={styles.icon} />
                            <h6>{'г.Алматы, пр.Аль-Фараби 5, БЦ "Нурлы тау", корпус 2а, офис 201'}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className={styles.copyright}>&#169; Copyright {getYearRangeFrom(2023)}, reportpartner.kz</h5>
        </div>
    );
};

export default Footer;
