import { PAGE_PARTS } from "@/constants/constants";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const socials = [
        {
            Icon: FaInstagram,
            link: "www.google.com",
        },
        {
            Icon: FaFacebookF,
            link: "www.google.com",
        },
    ];

    const contacts = ["some_email@gmail.com", "+7 (747) 123-45-67", "г. Алматы"];

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={"/RP_logo.png"} alt="Логотип RP" fill className={styles.logo} />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.companyContainer}>
                    <h3 className={styles.title}>Report Partner</h3>
                    <h5 className={styles.subtitle}>Lorem ipsum dolor sit amet.</h5>
                </div>
                <Nav className={`ms-auto me-auto gap-48 gap-sm-0 ${styles.linkContainer}`}>
                    {Object.keys(PAGE_PARTS).map((pagePart) => (
                        <Nav.Link className={styles.link} href={`#${PAGE_PARTS[pagePart].id}`} key={PAGE_PARTS[pagePart].id}>
                            {PAGE_PARTS[pagePart].title}
                        </Nav.Link>
                    ))}
                </Nav>
                <div className={styles.infosContainer}>
                    <div className={styles.socials}>
                        {socials.map((social) => (
                            <a href={social.link} target="_blank" key={social.link}>
                                <social.Icon />
                            </a>
                        ))}
                    </div>
                    <div className={styles.contactInfos}>
                        {contacts.map((contact) => (
                            <h6 key={contact}>{contact}</h6>
                        ))}
                    </div>
                </div>
            </div>
            <h5 className={styles.copyright}>copyright 2023</h5>
        </div>
    );
};

export default Footer;
