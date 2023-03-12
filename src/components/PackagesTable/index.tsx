import { ALL_PACKAGES, PACKAGES_HEADING, ServiceType } from "@/constants/constants";
import { faChevronDown, faCheck, faCircleInfo, faStarOfLife, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import { useState } from "react";
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

const countServicesByPackage = (packageItem: ServiceType, packageId: string) => {
    let currentCount = 0;
    if (
        packageItem.packages?.some((itemPackages) => itemPackages.id === packageId) ||
        (!!packageItem.expand &&
            packageItem.expand.some((expandItem) =>
                expandItem.packages?.some((itemPackages) => itemPackages.id === packageId)
            ))
    )
        currentCount++;
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
                {computedFrequencies.length !== 1 ? computedFrequencie.title : "Все пакеты"}:
            </strong>,
            <span key={`${packageItem.title}_${computedFrequencie.title}_${index}_span`}>{computedFrequencie.value}</span>,
        ]);
    });

    return (
        <>
            <tr className={subpackageClasses.join(" ")} onClick={handleClick}>
                <td>
                    <div className={styles.rowTitleContent}>
                        <div className={styles.shifter} />
                        <div className={serviceTitleClasses.join(" ")}>
                            {hasSub && (
                                <div className={chevronClasses.join(" ")}>
                                    <FontAwesomeIcon icon={faChevronDown} />
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
                                                  <FontAwesomeIcon icon={faCircleInfo} />
                                              </div>
                                          </Tooltip>
                                      )
                                    : !!packageItem.expand && (
                                          <div className={styles.infoIcon}>
                                              <FontAwesomeIcon icon={faArrowTurnDown} />
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
                                : (packageItem.packages?.some((itemPackages) => itemPackages.id === packageHeading.id) ||
                                      (!!packageItem.expand &&
                                          packageItem.expand.some((expandItem) =>
                                              expandItem.packages?.some(
                                                  (itemPackages) => itemPackages.id === packageHeading.id
                                              )
                                          ))) &&
                                  (packageItem.packages?.find((itemPackages) => itemPackages.id === packageHeading.id)
                                      ?.text ? (
                                      packageItem.packages?.find((itemPackages) => itemPackages.id === packageHeading.id)
                                          ?.text
                                  ) : expanded ? (
                                      <FontAwesomeIcon icon={faStarOfLife} className={styles.icon} />
                                  ) : (
                                      <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                                  ))}
                        </div>
                    </td>
                ))}
            </tr>
            {packageItem.expand?.map((expandPackage) => (
                <Subpackage
                    packageItem={expandPackage}
                    level={level}
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
            {ALL_PACKAGES.map((packageRoot) => (
                <div className={styles.packageRoot} key={packageRoot.packageId}>
                    <h3 className={styles.title}>{packageRoot.title}</h3>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead className={styles.heading}>
                                <tr>
                                    <th />
                                    {PACKAGES_HEADING[packageRoot.packageId].map((packageItem, index) => (
                                        <th className={`${styles.packageTitle} ${styles[packageItem.id]}`} key={index}>
                                            {packageItem.title}
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
        </div>
    );
};

export default PackagesTable;
