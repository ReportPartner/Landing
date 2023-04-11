import { PAGE_PARTS } from "@/constants/constants";
import emailjs from "@emailjs/browser";
import { Button, ConfigProvider, Form, Input, notification } from "antd";
import { useRef, useState } from "react";
import { FormLabel } from "react-bootstrap";
import styles from "./EmailForm.module.scss";

const EmailForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef<any>(null);

    const inputNames = {
        name: {
            name: "name",
            label: "Имя",
        },
        phone: {
            name: "phone",
            label: "Телефон",
        },
        email: {
            name: "email",
            label: "Email",
        },
    };

    const [values, setValues] = useState<{ [key: string]: any }>({});
    const [showError, setShowError] = useState(false);

    const handleChangeValue = (e: any) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClickSendEmail = (e: any) => {
        e.preventDefault();
        setShowError(false);
        const filled =
            Object.values(values).every((value) => !!value) &&
            Object.values(values).length === Object.values(inputNames).length;
        if (filled) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            if (form && form.current) {
                emailjs.sendForm("service_b6q6nsr", "template_fec15ol", form.current, "CxFzI_MUKQBWSamJR").then(
                    () => {
                        setValues({});
                        setLoading(false);
                        notification.success({
                            message: "Отлично!",
                            description: "Ваша заявка успешно оставлена. Мы свяжемся с Вами в ближайшее время.",
                            placement: "topRight",
                            duration: 5,
                        });
                    },
                    () => {
                        setLoading(false);
                        notification.error({
                            message: "Ошибка!",
                            description: "При отправке произошла ошибка, повторите позже.",
                            placement: "topRight",
                            duration: 5,
                        });
                    }
                );
            }
        } else {
            setShowError(true);
        }
    };

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>{PAGE_PARTS.contact.titleExt}</h2>
            <form onSubmit={handleClickSendEmail} ref={form} className={styles.form}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: "#588F27",
                        },
                    }}
                >
                    <Form.Item
                        validateStatus={showError && !values[inputNames.name.name] ? "error" : undefined}
                        help={showError && !values[inputNames.name.name] ? "Не заполнено" : undefined}
                        className={styles.inputItem}
                    >
                        <FormLabel>{inputNames.name.label}</FormLabel>
                        <Input
                            prefix={<span />}
                            value={values[inputNames.name.name]}
                            onChange={handleChangeValue}
                            type="text"
                            name={inputNames.name.name}
                            className={styles.input}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={showError && !values[inputNames.phone.name] ? "error" : undefined}
                        help={showError && !values[inputNames.phone.name] ? "Не заполнено" : undefined}
                        className={styles.inputItem}
                    >
                        <FormLabel>{inputNames.phone.label}</FormLabel>
                        <Input
                            prefix={<span />}
                            value={values[inputNames.phone.name]}
                            onChange={handleChangeValue}
                            type="tel"
                            name={inputNames.phone.name}
                            className={styles.input}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={showError && !values[inputNames.email.name] ? "error" : undefined}
                        help={showError && !values[inputNames.email.name] ? "Не заполнено" : undefined}
                        className={styles.inputItem}
                    >
                        <FormLabel>{inputNames.email.label}</FormLabel>
                        <Input
                            prefix={<span />}
                            value={values[inputNames.email.name]}
                            onChange={handleChangeValue}
                            type="email"
                            name={inputNames.email.name}
                            className={styles.input}
                        />
                    </Form.Item>
                    <Form.Item className={styles.inputItem}>
                        <Button type="primary" htmlType="submit" loading={loading} className={styles.submitBtn}>
                            Отправить
                        </Button>
                    </Form.Item>
                </ConfigProvider>
            </form>
        </div>
    );
};

export default EmailForm;
