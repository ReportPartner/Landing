import { TeamMemberInfoType } from "@/constants/constants";
import Image from "next/image";
import styles from "./About.module.scss";

type TeamMemberCardType = {
    teamMember: TeamMemberInfoType;
    isRight: boolean;
};

const TeamMemberCard = ({ teamMember, isRight }: TeamMemberCardType) => {
    const classes = [styles.teamMemberCard];
    if (isRight) classes.push(styles.right);
    const ImageContainer = () => {
        return (
            <div className={styles.imageContainer}>
                <Image src={teamMember.image} alt={"Portrait"} fill className={styles.image} />
            </div>
        );
    };

    return (
        <div className={classes.join(" ")}>
            <div className={styles.profileDesc}>
                <div className={styles.leftImage}>
                    <ImageContainer />
                </div>
                <div className={styles.content}>
                    <h5 className={styles.fullname}>{teamMember.fullname}</h5>
                    <h5 className={styles.position}>{teamMember.position}</h5>
                    <h5 className={styles.text}>{teamMember.text}</h5>
                </div>
                <div className={styles.rightImage}>
                    <ImageContainer />
                </div>
            </div>
            <div className={styles.modileText}>
                <h5 className={styles.text}>{teamMember.text}</h5>
            </div>
        </div>
    );
};

export default TeamMemberCard;
