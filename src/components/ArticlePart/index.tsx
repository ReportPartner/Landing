import { Divider } from "antd";
import styles from "./ArticlePart.module.scss";

type ArticlePartType = {
    title?: string;
    id: string;
    subtitle?: string;
    children?: React.ReactNode;
};

const ArticlePart = ({ title = "", id, subtitle, children }: ArticlePartType) => {
    return (
        <div className={styles.main} id={id}>
            {title ? (
                <Divider orientation="center">
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    {!!subtitle && subtitle}
                </Divider>
            ) : (
                <Divider />
            )}
            {children}
        </div>
    );
};

export default ArticlePart;
