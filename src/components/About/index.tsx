import { TEAM_MEMBERS } from "@/constants/constants";
import { Divider } from "antd";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaChevronCircleLeft, FaChevronCircleRight, FaCheckCircle } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import Container from "../Container";
import styles from "./About.module.scss";
import TeamMemberCard from "./TeamMemberCard";

const CertificateImage = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <div className={styles.imageContainer}>
            <Image src={imgSrc} alt="Certificate" fill className={styles.image} />
        </div>
    );
};

const About = () => {
    const descriptions = [
        "мы специалисты с 20 летним стажем",
        "предоставляем услуги в сфере бухгалтерского, юридического и кадрового обслуживания",
        "начали свой путь в 2020 году",
        "регулярно прокачиваем свои навыки",
        "24/7 отслеживаем изменения в законодательстве",
    ];

    const benefits = [
        "оптимизацию налоговой нагрузки",
        "выход из кризисных ситуаций",
        "правильно сформированный бюджет расходов и доходов",
        "решение казусных юридических вопросов",
        "помощь в кадровых делах",
    ];

    return (
        <div className={styles.main}>
            <div className={styles.aboutContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.backgroundFiller}>
                        <div className={`${styles.imageContainer} ${styles.teamImageContainer}`}>
                            <Image src={"/team.webp"} alt={"Team"} fill priority className={styles.teamImage} />
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <Container>
                            <p className={styles.description}>
                                Привет всем, мы «Report Partner» - профессиональная бухгалтерская компания
                                <ul>
                                    {descriptions.map((description) => (
                                        <li key={description}>
                                            <FaCheckCircle className={styles.icon} /> {description}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <p className={styles.description}>
                                Мы начали свой путь в непростое время - в период пандемии Covid-19. Многим компаниям пришлось
                                менять мышление и подход к ведению бизнеса, и, наш большой опыт работы в крупных
                                международных компаниях + высокая квалификация, очень помогли в этом. Компании, которые
                                доверяют нам, получают:
                                <ul>
                                    {benefits.map((benefit) => (
                                        <li key={benefit}>
                                            <BsFillPinAngleFill className={styles.icon} /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                                Наша миссия - защищать бизнес наших клиентов от дорогостоящих ошибок штатных бухгалтеров!
                            </p>
                        </Container>
                    </div>
                </div>
            </div>
            <Container>
                <div className={styles.teamCertContainer}>
                    <div className={styles.container}>
                        <h4 className={styles.subtitle}>Наша команда</h4>
                        <div className={styles.teamContainer}>
                            {TEAM_MEMBERS.map((teamMember, index) => (
                                <div key={index}>
                                    <TeamMemberCard teamMember={teamMember} />
                                    {index !== TEAM_MEMBERS.length - 1 && <Divider />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.container}>
                        <h4 className={styles.subtitle}>Сертификаты</h4>
                        <div className={styles.certificatesContainer}>
                            <Carousel
                                interval={4000}
                                pause="hover"
                                prevIcon={
                                    <div className={styles.arrowIcon}>
                                        <FaChevronCircleLeft />
                                    </div>
                                }
                                nextIcon={
                                    <div className={styles.arrowIcon}>
                                        <FaChevronCircleRight />
                                    </div>
                                }
                            >
                                {[...new Array(11)].map((_, index) => (
                                    <Carousel.Item key={index}>
                                        <CertificateImage imgSrc={`/Certificates/${index + 1}.webp`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
