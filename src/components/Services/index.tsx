import { PAGE_PARTS } from "@/constants/constants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots, faHeadphonesSimple, faPhone, faPhoneAlt, faPhoneSquare, faPhoneSquareAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigProvider, FloatButton } from "antd";
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
        <div className={styles.main}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#588f27",
                    },
                }}
            >
                <FloatButton
                    className={`${styles.fab} ${styles.expressCheckUp}`}
                    description={<a href={`#${PAGE_PARTS.services.id}`}>Экспресс проверка</a>}
                    shape={"square"}
                    type={"primary"}
                />
                <FloatButton.Group
                    className={`${styles.fab} ${styles.contact}`}
                    closeIcon={null}
                    icon={null}
                    description={
                        <div className={styles.shakingContainer}>
                            <FontAwesomeIcon icon={faCommentDots} className={styles.shakingIcon} />
                        </div>
                    }
                    trigger="hover"
                    shape="square"
                >
                    <FloatButton
                        description={
                            <a target="_blank" href={`https://wa.me/+77082244123?text=${whatsAppDefaultMessage}`}>
                                <FontAwesomeIcon icon={faWhatsapp} fontSize={20} />
                            </a>
                        }
                        shape="square"
                        tooltip="Написать в WhatsApp"
                    />
                    <FloatButton
                        description={
                            <a target="_blank" href="tel:123-456-7890">
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        }
                        shape="square"
                        tooltip="Позвонить"
                    />
                </FloatButton.Group>
            </ConfigProvider>
            <h4 className={styles.title}>Экспресс проверка бух учета</h4>
            <div className={styles.contentPart}>
                <div className={styles.pricesContainer}>
                    <div className={styles.item}>
                        <span>Без отчета</span>
                        <span>В течении 2-х раб дней</span>
                        <span>Бесплатно</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.item}>
                        <span>С отчетом проверки</span>
                        <span>В течении 4-х раб дней</span>
                        <span className={styles.price}>{expressCheckUpPrice.toLocaleString()}</span>
                    </div>
                </div>
                <div className={styles.listContainer}>
                    <h6 className={styles.title}>Процедуры</h6>
                    <ol>
                        {procedures.map((procedure) => (
                            <li key={procedure}>{procedure}</li>
                        ))}
                    </ol>
                </div>
                <div className={styles.listContainer}>
                    <h6 className={styles.title}>Результат проверки </h6>
                    <ol>
                        {results.map((result) => (
                            <li key={result}>{result}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Services;
