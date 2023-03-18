import styles from "./ArticlePart.module.scss";

type ArticlePartType = {
    title?: string;
    id: string;
    children?: React.ReactNode;
};

const ArticlePart = ({ title = "", id, children }: ArticlePartType) => {
    return (
        <div className={styles.main} id={id}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    );
};

export default ArticlePart;
