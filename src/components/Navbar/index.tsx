import { CONTACT_NUMBER_MAIN, PAGE_PARTS } from "@/constants/constants";
import Image from "next/image";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <BsNavbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container>
                <div className={styles.logoContainer}>
                    <Image src="/RP_logo_abbr.webp" alt="" priority fill className={styles.logo} />
                </div>
                <div className={styles.mobileTogglerContainer}>
                    <Nav>
                        <a
                            className={`${styles.phoneNumber} ${styles.mobile}`}
                            href={`tel:+${CONTACT_NUMBER_MAIN.replace(/\D/g, "")}`}
                        >
                            <FaPhone className={styles.icon} /> {CONTACT_NUMBER_MAIN}
                        </a>
                    </Nav>
                    <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <BsNavbar.Collapse id={`responsive-navbar-nav`}>
                    <Nav className={`ms-auto me-auto gap-48 gap-sm-0 ${styles.linkContainer}`}>
                        {Object.keys(PAGE_PARTS).map((pagePart) => (
                            <Nav.Link
                                className={styles.link}
                                href={`#${PAGE_PARTS[pagePart].id}`}
                                key={PAGE_PARTS[pagePart].id}
                            >
                                {PAGE_PARTS[pagePart].title}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                        <a className={styles.phoneNumber} href={`tel:+${CONTACT_NUMBER_MAIN.replace(/\D/g, "")}`}>
                            <FaPhone className={styles.icon} /> {CONTACT_NUMBER_MAIN}
                        </a>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;
