import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Error.module.scss";

const ErrorPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={"/RP_logo_abbr.png"} alt="Логотип RP" fill />
            </div>
            <h3>Усп! Такой страницы не существует</h3>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#588F27",
                    },
                }}
            >
                <Button type="primary" size="large">
                    <Link href={"/"} className={styles.link}>
                        Вернуться на главную
                    </Link>
                </Button>
            </ConfigProvider>
        </div>
    );
};

export default ErrorPage;
