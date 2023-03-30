import { TeamMemberInfoType } from "@/constants/constants";
import Image from "next/image";
import styles from "./About.module.scss";
import { GoPrimitiveDot } from "react-icons/go"

type TeamMemberCardType = {
    teamMember: TeamMemberInfoType;
};

const TeamMemberCard = ({ teamMember }: TeamMemberCardType) => {
    const ImageContainer = () => {
        return (
            <div className={styles.imageContainer}>
                <Image src={teamMember.image} alt={"Portrait"} fill className={styles.image} />
            </div>
        );
    };

    return (
        <div className={styles.teamMemberCard}>
            <div className={styles.stickyImgContainer}>
                <ImageContainer />
            </div>
            <div className={styles.content}>
                <h4 className={styles.fullname}>{teamMember.fullname}</h4>
                <h5 className={styles.position}>{teamMember.position}</h5>
                {!!teamMember.subposition && <h6 className={styles.subposition}>{teamMember.subposition}</h6>}
                {!!teamMember.content && (
                    <div className={styles.content}>
                        {teamMember.content.map((contentItem, index) =>
                            typeof contentItem === "string" ? (
                                <p key={`p_${index}`}>{contentItem}</p>
                            ) : (
                                contentItem.map((item, itemIndex) => (
                                    <p key={`p_${index}_${itemIndex}`}><GoPrimitiveDot className={styles.icon} />{item}</p>
                                ))
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamMemberCard;
