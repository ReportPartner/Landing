import { CONTACT_NUMBER, PAGE_PARTS } from "@/constants/constants";
import { ConfigProvider, Divider, FloatButton, Steps } from "antd";
import Image from "next/image";
import { FaCommentDots, FaPhone, FaWhatsapp } from "react-icons/fa";
import Container from "../Container";
import styles from "./Services.module.scss";

const Services = () => {
    const expressCheckUpPrice = 30000;

    const procedures = [
        "В случае наличия базы 1C, вынолнится ее выгрузка. В случае отсутствия базы 1C, потребуются ключи ЭЦП.",
        "Проверка банковских операций и кассы на соответствие с законом РК.",
        "Проверка дебеторской и кредиторской задолженности на предмет финансовой стабильности компании.",
        "Проверка сданной отчетности на своевременность.",
        "Проверка своевременности начисления заработной платы и начисления налогов.",
        "Проверка соответствия вида деятельности и применяемого налогооблажения.",
    ];

    const results = [
        "Экспертное мнение по ведению бухгалтерского и налогового учета.",
        "Рекомендации по исправлению некоректного ведения бухгалтерского и налогового учета.",
        "Рекомендации по самым ключевым вопросам касательно вида деятельности.",
    ];

    const whatsAppDefaultMessage = "Здравствуйте!";

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image src={"/RP_logo.webp"} alt={"Логотип RP"} fill priority className={styles.image} />
            </div>
            <Container>
                <div className={styles.main} id={PAGE_PARTS.express.id}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: "#588f27",
                            },
                        }}
                    >
                        <FloatButton
                            className={`${styles.fab} ${styles.expressCheckUp}`}
                            description={<a href={`#${PAGE_PARTS.express.id}`}>{PAGE_PARTS.express.title}</a>}
                            shape={"square"}
                            type={"primary"}
                        />
                        <FloatButton.Group
                            className={`${styles.fab} ${styles.contact}`}
                            closeIcon={null}
                            icon={null}
                            description={
                                <div className={styles.shakingContainer}>
                                    <FaCommentDots className={styles.shakingIcon} />
                                </div>
                            }
                            trigger="hover"
                            shape="square"
                        >
                            <FloatButton
                                description={
                                    <a
                                        target="_blank"
                                        href={`https://wa.me/${CONTACT_NUMBER.replace(
                                            /\D/g,
                                            ""
                                        )}?text=${whatsAppDefaultMessage}`}
                                    >
                                        <FaWhatsapp fontSize={20} />
                                    </a>
                                }
                                shape="square"
                                tooltip="Написать в WhatsApp"
                            />
                            <FloatButton
                                description={
                                    <a target="_blank" href={`tel:${CONTACT_NUMBER.replace(/\D/g, "")}`}>
                                        <FaPhone />
                                    </a>
                                }
                                shape="square"
                                tooltip="Позвонить"
                            />
                        </FloatButton.Group>
                        <h4 className={styles.mainTitle}>Экспресс проверка бух учета</h4>
                        <div className={styles.contentPart}>
                            <div className={styles.pricesContainer}>
                                <div className={styles.item}>
                                    <span className={styles.priceTitle}>Без отчета</span>
                                    <span>В течении 2-х раб дней</span>
                                    <span>Бесплатно</span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.priceTitle}>С отчетом проверки</span>
                                    <span>В течении 4-х раб дней</span>
                                    <span className={styles.price}>{expressCheckUpPrice.toLocaleString()}</span>
                                </div>
                            </div>
                            <div className={styles.listContainer}>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorText: "#fff",
                                        },
                                    }}
                                >
                                    <Divider orientation="left" style={{ borderColor: "#588f27" }}>
                                        <h6 className={styles.title}>Процедуры</h6>
                                    </Divider>
                                    <Steps
                                        direction="vertical"
                                        progressDot
                                        items={procedures.map((procedure) => ({
                                            title: procedure,
                                            style: { color: "white" },
                                            status: "process",
                                        }))}
                                    />
                                </ConfigProvider>
                            </div>
                            <div className={styles.listContainer}>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorText: "#fff",
                                        },
                                    }}
                                >
                                    <Divider orientation="left" style={{ borderColor: "#588f27" }}>
                                        <h6 className={styles.title}>Результат проверки</h6>
                                    </Divider>
                                    <Steps
                                        direction="vertical"
                                        progressDot
                                        items={results.map((result) => ({
                                            title: result,
                                            style: { color: "white" },
                                            status: "process",
                                        }))}
                                    />
                                </ConfigProvider>
                            </div>
                        </div>
                    </ConfigProvider>
                </div>
            </Container>
        </div>
    );
};

export default Services;
