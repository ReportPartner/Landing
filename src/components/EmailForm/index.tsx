import { PAGE_PARTS } from "@/constants/constants";
import emailjs from "@emailjs/browser";
import { Button, ConfigProvider, Form, Input, message, notification, Space } from "antd";
import { useRef, useState } from "react";
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

    const labelSpan = 4;
    const labelCol = { span: labelSpan };
    const submitBtnLabelCol = { offset: labelSpan };

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
                emailjs.sendForm("service_667eqyp", "template_l8thbrv", form.current, "WWUPVbWBGFwIcMfAM").then(
                    () => {
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
            <h2 className={styles.title}>{PAGE_PARTS.contact.title}</h2>
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
                        labelCol={labelCol}
                        label={inputNames.name.label}
                        className={styles.inputItem}
                    >
                        <Input
                            prefix={<span />}
                            onChange={handleChangeValue}
                            type="text"
                            name={inputNames.name.name}
                            className={styles.input}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={showError && !values[inputNames.phone.name] ? "error" : undefined}
                        help={showError && !values[inputNames.phone.name] ? "Не заполнено" : undefined}
                        labelCol={labelCol}
                        label={inputNames.phone.label}
                        className={styles.inputItem}
                    >
                        <Input
                            prefix={<span />}
                            onChange={handleChangeValue}
                            type="tel"
                            name={inputNames.phone.name}
                            className={styles.input}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={showError && !values[inputNames.email.name] ? "error" : undefined}
                        help={showError && !values[inputNames.email.name] ? "Не заполнено" : undefined}
                        labelCol={labelCol}
                        label={inputNames.email.label}
                        className={styles.inputItem}
                    >
                        <Input
                            prefix={<span />}
                            onChange={handleChangeValue}
                            type="email"
                            name={inputNames.email.name}
                            className={styles.input}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={submitBtnLabelCol} className={styles.inputItem}>
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
