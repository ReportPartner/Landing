import Image from "next/image";
import styles from "./About.module.scss";
import TeamMemberCard from "./TeamMemberCard";
import { TEAM_MEMBERS } from "@/constants/constants";
import { Divider } from "antd";
import { Carousel } from "react-bootstrap";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Container from "../Container";

const CertificateImage = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <div className={styles.imageContainer}>
            <Image src={imgSrc} alt="Certificate" fill className={styles.image} />
        </div>
    );
};

const About = () => {
    const certificates = ["/cert1.jpg", "/cert2.jpg", "/cert3.jpg"];
    return (
        <div className={styles.main}>
            <div className={styles.aboutContainer}>
                <div className={styles.contentContainer}>
                    <div className={`${styles.imageContainer} ${styles.teamImageContainer}`}>
                        <Image src={"/team.jpg"} alt={"Team"} fill priority className={styles.teamImage} />
                    </div>
                    <div className={styles.descriptionContainer}>
                        <Container>
                            <p className={styles.description}>
                                Для современного мира дальнейшее развитие различных форм деятельности играет важную роль в
                                формировании поставленных обществом и правительством задач. Не вызывает сомнений, что
                                повышение уровня гражданского сознания требует анализа новых принципов формирования
                                материально-технической и кадровой базы. Для современного мира выбранный нами инновационный
                                путь способствует подготовке и реализации поставленных обществом и правительством задач.
                                Разнообразный и богатый опыт повышение уровня гражданского сознания напрямую зависит от
                                направлений прогрессивного развития.
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
                                <TeamMemberCard teamMember={teamMember} isRight={index % 2 === 1} />
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
                            {certificates.map((certificate, index) => (
                                <Carousel.Item key={certificate + index}>
                                    <CertificateImage imgSrc={certificate} />
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
