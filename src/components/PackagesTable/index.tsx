import { ALL_PACKAGES, PACKAGES_HEADING, ServiceType } from "@/constants/constants";
import { Tooltip } from "antd";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { FaCheck, FaChevronDown, FaInfoCircle, FaLevelDownAlt, FaStarOfLife } from "react-icons/fa";
import styles from "./Packages.module.scss";

const countServicesTotal = (packageItem: ServiceType) => {
    if (!packageItem.subservices) return 1;
    let currentCount = 0;
    packageItem.subservices.forEach((subpackageItem) => {
        if (subpackageItem.subservices) {
            currentCount += countServicesTotal(subpackageItem);
        } else {
            currentCount += 1;
        }
    });
    return currentCount;
};

const hasDeepPackage = (targetPackageItem: ServiceType, targetPackageId: string): boolean => {
    if (targetPackageItem.packages?.some((itemPackages) => itemPackages.id === targetPackageId)) return true;
    if (
        targetPackageItem.expand?.some((expandItem) =>
            expandItem.packages?.some((itemPackages) => itemPackages.id === targetPackageId)
        )
    )
        return true;
    if (targetPackageItem.expand?.some((expandItem) => hasDeepPackage(expandItem, targetPackageId))) return true;
    return false;
};

const countServicesByPackage = (packageItem: ServiceType, packageId: string) => {
    let currentCount = 0;
    if (hasDeepPackage(packageItem, packageId)) currentCount++;
    if (packageItem.subservices) {
        packageItem.subservices.forEach((subpackageItem) => {
            currentCount += countServicesByPackage(subpackageItem, packageId);
        });
    }
    return currentCount;
};

const Subpackage = ({
    packageItem,
    level = 1,
    packageId,
    expanded = false,
}: {
    packageItem: ServiceType;
    level?: number;
    packageId: "starting" | "operating";
    expanded?: boolean;
}) => {
    const [isSubOpen, setSubOpen] = useState(false);

    const handleClick = () => {
        setSubOpen((prevOpen) => !prevOpen);
    };

    const hasSub = !!packageItem.subservices;

    const subpackageClasses = [styles.subpackage, styles[`subpackage_${level}`]];
    if (hasSub) subpackageClasses.push(styles.hasSub);
    if (isSubOpen) subpackageClasses.push(styles.open);
    if (expanded) subpackageClasses.push(styles.expanded);

    const serviceTitleClasses = [styles.serviceTitle];
    if (expanded) serviceTitleClasses.push(styles.expanded);

    const chevronClasses = [styles.chevron];
    if (isSubOpen) chevronClasses.push(styles.open);

    const computedFrequencies: { [key: string]: any }[] = [];
    PACKAGES_HEADING[packageId]
        .filter((packageHeading) => packageItem.packages?.some((itemPackages) => itemPackages.id === packageHeading.id))
        .map((packageHeading) => ({
            title: packageHeading.title,
            value: packageItem.packages?.find((itemPackages) => itemPackages.id === packageHeading.id)?.frequency,
        }))
        .forEach((computedPackage) => {
            if (computedPackage.value) {
                const title = computedPackage.title;
                const group = computedFrequencies.find((group) => group.value === computedPackage.value);
                if (group) {
                    group.title += `, ${title}`;
                } else {
                    computedFrequencies.push({ title, value: computedPackage.value });
                }
            }
        });
    const computedFrequenciesTitle: React.ReactNode[] = [];
    computedFrequencies.forEach((computedFrequencie, index) => {
        if (index !== 0)
            computedFrequenciesTitle.push(<br key={`${packageItem.title}_${computedFrequencie.title}_${index}_br`} />);
        computedFrequenciesTitle.push([
            <strong key={`${packageItem.title}_${computedFrequencie.title}_${index}_strong`} style={{ marginRight: "8px" }}>
                {computedFrequencies.length !== 1
                    ? computedFrequencie.title
                    : computedFrequencie.title.split(", ").length === 1
                    ? computedFrequencie.title
                    : "Все пакеты"}
                :
            </strong>,
            <span key={`${packageItem.title}_${computedFrequencie.title}_${index}_span`}>{computedFrequencie.value}</span>,
        ]);
    });

    const shifterSize = 12;
    return (
        <>
            <tr className={subpackageClasses.join(" ")} onClick={handleClick}>
                <td>
                    <div className={styles.rowTitleContent}>
                        <div
                            className={styles.shifter}
                            style={{ width: `${shifterSize * (level - 1) + (expanded ? shifterSize : 0)}px` }}
                        />
                        <div className={serviceTitleClasses.join(" ")}>
                            {hasSub && (
                                <div className={chevronClasses.join(" ")}>
                                    <FaChevronDown />
                                </div>
                            )}
                            <div className={styles.rowTitle}>
                                {packageItem.title}
                                {PACKAGES_HEADING[packageId].some((packageHeading) =>
                                    packageItem.packages?.some((itemPackages) => itemPackages.id === packageHeading.id)
                                )
                                    ? computedFrequenciesTitle.length !== 0 && (
                                          <Tooltip
                                              title={computedFrequenciesTitle}
                                              overlayInnerStyle={{ width: "max-content" }}
                                          >
                                              <div className={styles.infoIcon}>
                                                  <FaInfoCircle />
                                              </div>
                                          </Tooltip>
                                      )
                                    : !!packageItem.expand && (
                                          <div className={styles.infoIcon}>
                                              <FaLevelDownAlt />
                                          </div>
                                      )}
                            </div>
                        </div>
                    </div>
                </td>
                {PACKAGES_HEADING[packageId].map((packageHeading, index) => (
                    <td className={styles.contentPart} key={`${level}_${index}`}>
                        <div>
                            {hasSub
                                ? `${countServicesByPackage(packageItem, packageHeading.id)} / ${countServicesTotal(
                                      packageItem
                                  )}`
                                : hasDeepPackage(packageItem, packageHeading.id) &&
                                  (packageItem.packages?.find((itemPackages) => itemPackages.id === packageHeading.id)
                                      ?.text ? (
                                      <span>
                                          {
                                              packageItem.packages?.find(
                                                  (itemPackages) => itemPackages.id === packageHeading.id
                                              )?.text
                                          }
                                      </span>
                                  ) : expanded ? (
                                      <FaStarOfLife className={styles.icon} />
                                  ) : (
                                      <FaCheck className={styles.icon} />
                                  ))}
                        </div>
                    </td>
                ))}
            </tr>
            {packageItem.expand?.map((expandPackage) => (
                <Subpackage
                    packageItem={expandPackage}
                    level={level + (expanded ? 1 : 0)}
                    packageId={packageId}
                    expanded
                    key={`${packageItem.title}_${expandPackage.title}`}
                />
            ))}
            {isSubOpen &&
                packageItem.subservices?.map((subpackageItem) => (
                    <Subpackage
                        packageItem={subpackageItem}
                        level={level + 1}
                        packageId={packageId}
                        key={`${packageItem.title}_${subpackageItem.title}`}
                    />
                ))}
        </>
    );
};

const PackagesTable = () => {
    return (
        <div className={styles.main}>
            <div>
                <p className={styles.description}>
                    Представляем наши тарифные планы для <a href={`#${ALL_PACKAGES[0].packageId}`}>начинающих</a> и{" "}
                    <a href={`#${ALL_PACKAGES[1].packageId}`}>действующих</a> бизнесов. Наши тарифы разработаны с учетом
                    особенностей каждого бизнеса, обеспечивая максимальную эффективность работы.
                </p>
                <p className={styles.description}>
                    Основное преимущество - это комплексное обслуживание, включая бухгалтерское, кадровое и юридическое
                    сопровождение. Мы предлагаем идеальное соотношение цены и качества, и готовы предоставить
                    высококвалифицированные услуги, позволяющие сосредоточиться на развитии бизнеса.
                </p>
                <p className={styles.description}>Подробнее о тарифах и услугах - ниже.</p>
            </div>
            {ALL_PACKAGES.map((packageRoot) => (
                <div className={styles.packageRoot} key={packageRoot.packageId} id={packageRoot.packageId}>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead className={styles.heading}>
                                <tr>
                                    <th className={styles.freezedColumn}>
                                        <h3 className={styles.mainTitle}>{packageRoot.title}</h3>
                                    </th>
                                    {PACKAGES_HEADING[packageRoot.packageId].map((packageItem, index) => (
                                        <th key={index}>
                                            <div className={`${styles.packageTitle} ${styles[packageItem.id]}`}>
                                                <div className={styles.titleContainer}>
                                                    <span className={styles.title}>{packageItem.title}</span>
                                                    {!!packageItem.subtitle && (
                                                        <span className={styles.subtitle}>{packageItem.subtitle}</span>
                                                    )}
                                                </div>
                                                <span className={styles.price}>{packageItem.price.toLocaleString()}</span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className={styles.body}>
                                {packageRoot.services.map((serviceItem) => (
                                    <Subpackage
                                        packageItem={serviceItem}
                                        packageId={packageRoot.packageId}
                                        key={serviceItem.title}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            <h6 className={styles.postTableText}>
                * стоимость тарифов указана без учета НДС
            </h6>
        </div>
    );
};

export default PackagesTable;
