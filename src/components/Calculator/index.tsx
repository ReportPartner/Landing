import { CALC_VALUES, DISCOUNT, DISCOUNT_VALUES } from "@/constants/constants";
import { Checkbox, ConfigProvider, Segmented, Slider } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SegmentedValue } from "antd/es/segmented";
import { SliderMarks } from "antd/es/slider";
import Image from "next/image";
import { useState } from "react";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import styles from "./Calculator.module.scss";

type InputContainerType = {
    title: string;
    gridArea: string;
    children: React.ReactNode;
};

const InputContainer = ({ title, gridArea, children }: InputContainerType) => {
    return (
        <div className={`${styles.inputContainer} ${styles[gridArea]}`}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.input}>{children}</div>
        </div>
    );
};

const staffMarks: SliderMarks = {};
const staffCount = CALC_VALUES.staffs?.length || 0;
const staffStepLength = Math.floor(100 / (staffCount - 1));
for (let i = 0; i < staffCount; i++) {
    staffMarks[i === staffCount - 1 ? 100 : staffStepLength * i] = {
        style: {
            whiteSpace: "nowrap",
        },
        label: CALC_VALUES.staffs[i].title,
    };
}
const defaultStaffMark = staffCount > 1 ? parseInt(Object.keys(staffMarks)[1]) : 0;

const Calculator = () => {
    const modeOptions = CALC_VALUES.modes.map((option) => option.title);
    const [modeOption, setModeOption] = useState(modeOptions[0]);
    const modePrice = CALC_VALUES.modes.find((option) => option.title === modeOption)?.price || 0;

    const [activityTypes, setActivityTypes] = useState<string[]>([]);
    const activityTypePrice = activityTypes
        .map(
            (activityType) =>
                CALC_VALUES.activityTypes.find((initActivityType) => initActivityType.value === activityType)?.price ||
                CALC_VALUES.activityTypes
                    .find((initActivityType) =>
                        initActivityType.options?.some((initSubactivityType) => initSubactivityType.value === activityType)
                    )
                    ?.options?.find((initActivityType) => initActivityType.value === activityType)?.price ||
                0
        )
        .reduce((sum, activityType) => sum + activityType, 0);
    const isActivityTypeDiscount = activityTypes.some((activityType) =>
        Object.values(DISCOUNT_VALUES).includes(activityType)
    );

    const [taxations, setTaxations] = useState<string[]>([]);
    const taxationsPrice = taxations
        .map((taxation) => CALC_VALUES.taxations.find((initTaxation) => initTaxation.value === taxation)?.price || 0)
        .reduce((sum, taxation) => sum + taxation, 0);
    const isTaxationDiscount = taxations.some((taxation) => Object.values(DISCOUNT_VALUES).includes(taxation));

    const [staffValue, setStaffValue] = useState(defaultStaffMark);
    const [staffPrice, setStaffPrice] = useState(
        CALC_VALUES.staffs.find((staff) => staff.title === (staffMarks[defaultStaffMark] as { [key: string]: any })?.label)
            ?.price || 0
    );

    const handleChangeMode = (newOption: SegmentedValue) => {
        setModeOption(newOption as string);
    };

    const handleChangeTaxation = (newTaxation: CheckboxChangeEvent) => {
        if (newTaxation.target.checked) {
            setTaxations((prevTaxations) => [...prevTaxations, newTaxation.target.value]);
        } else {
            setTaxations((prevTaxations) =>
                prevTaxations.filter((prevTaxation) => prevTaxation !== newTaxation.target.value)
            );
        }
    };

    const handleChangeActivityType = (newActivityType: CheckboxChangeEvent) => {
        if (newActivityType.target.checked) {
            setActivityTypes((prevActivityTypes) => {
                let computedValue = [...prevActivityTypes];
                const newVal = newActivityType.target.value;
                if (computedValue.some((prevValue) => prevValue.startsWith(newVal.split("_")[0]))) {
                    computedValue = computedValue.filter((prevValue) => !prevValue.startsWith(newVal.split("_")[0]));
                }
                computedValue.push(newVal);
                return computedValue;
            });
        } else {
            setActivityTypes((prevActivityTypes) =>
                prevActivityTypes.filter((prevActivityType) => prevActivityType !== newActivityType.target.value)
            );
        }
    };

    const isChecked = (targetValue: string, isTaxation = true) => {
        if (isTaxation) return taxations.includes(targetValue);
        return activityTypes.includes(targetValue);
    };

    const handleChangeStaff = (newStaff: number) => {
        setStaffValue(newStaff);
        setStaffPrice(
            CALC_VALUES.staffs.find((staff) => staff.title === (staffMarks[newStaff] as { [key: string]: any })?.label)
                ?.price || 0
        );
    };

    const totalPrice = modePrice + activityTypePrice + taxationsPrice + staffPrice;

    const isDiscount = isActivityTypeDiscount || isTaxationDiscount;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#588F27",
                },
            }}
        >
            <div className={styles.main}>
                <div className={styles.inputsContainer}>
                    <InputContainer title="Режим" gridArea="modes">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBgElevated: "#a1b588",
                                },
                            }}
                        >
                            <Segmented options={modeOptions} value={modeOption} onChange={handleChangeMode} />
                        </ConfigProvider>
                    </InputContainer>
                    <InputContainer title="Вид деятельности" gridArea="activityTypes">
                        <div className={styles.checkboxGroup}>
                            {CALC_VALUES.activityTypes.map((activityType) =>
                                activityType.options ? (
                                    <div key={activityType.title} className={styles.subgroup}>
                                        <h5 className={styles.title}>{activityType.title}</h5>
                                        {activityType.options.map((subactivityType) => (
                                            <Checkbox
                                                className={styles.checkbox}
                                                checked={isChecked(subactivityType.value, false)}
                                                value={subactivityType.value}
                                                key={subactivityType.title}
                                                onChange={handleChangeActivityType}
                                                style={{ margin: 0 }}
                                            >
                                                {subactivityType.title}
                                            </Checkbox>
                                        ))}
                                    </div>
                                ) : (
                                    <Checkbox
                                        className={styles.checkbox}
                                        checked={isChecked(activityType.value, false)}
                                        value={activityType.value}
                                        key={activityType.title}
                                        onChange={handleChangeActivityType}
                                        style={{ margin: 0 }}
                                    >
                                        {activityType.title}
                                    </Checkbox>
                                )
                            )}
                        </div>
                    </InputContainer>
                    <InputContainer title="Налогооблажение" gridArea="taxations">
                        <div className={styles.checkboxGroup}>
                            {CALC_VALUES.taxations.map((taxation) => (
                                <Checkbox
                                    checked={isChecked(taxation.value)}
                                    value={taxation.value}
                                    key={taxation.title}
                                    onChange={handleChangeTaxation}
                                    style={{ margin: 0 }}
                                >
                                    {taxation.title}
                                </Checkbox>
                            ))}
                        </div>
                    </InputContainer>
                    <InputContainer title="Сотрудники" gridArea="staffs">
                        <div className={styles.staffSliderContainer}>
                            <Slider
                                marks={staffMarks}
                                step={null}
                                value={staffValue}
                                onChange={handleChangeStaff}
                                tooltip={{ open: false }}
                            />
                        </div>
                    </InputContainer>
                </div>
                <div className={styles.divider} />
                <div className={styles.totalContainer}>
                    <h4 className={styles.title}>Итого:</h4>
                    <span className={styles.price}>
                        <AnimatedNumber
                            value={isDiscount ? Math.ceil(totalPrice * (1 - DISCOUNT)) : totalPrice}
                            hasComma
                            size={48}
                            duration={300}
                        />
                    </span>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/topographic2.webp" alt="Calculator" fill priority className={styles.topographic} />
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Calculator;
