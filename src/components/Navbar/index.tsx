import Image from "next/image";
import { Container, Nav, Navbar as BsNavbar, NavDropdown } from "react-bootstrap";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <BsNavbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container>
                <div className={styles.logoContainer}>
                    <Image src="/RP_logo_abbr.png" alt="Report Partner" priority fill className={styles.logo} />
                </div>
                <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BsNavbar.Collapse id={`responsive-navbar-nav`}>
                    <Nav className={`ms-auto me-auto gap-48 gap-sm-0 ${styles.linkContainer}`}>
                        <Nav.Link href="#about">О нас</Nav.Link>
                        <Nav.Link href="#calculator">Калькулятор цен</Nav.Link>
                        <Nav.Link href="#prices">Тарифы</Nav.Link>
                        <Nav.Link href="#services">Услуги</Nav.Link>
                    </Nav>
                    <Nav>
                        <a href="tel:">Номер телефона</a>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;
