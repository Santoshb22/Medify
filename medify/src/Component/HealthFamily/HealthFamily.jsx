import FollowersCard from "./FollowersCard/FollowersCard"
import styles from "./HealthFamily.module.css"
import happyHand from "../../assets/happyHands-icon.png"
const HealthFamily = () => {
  return (
    <div className={styles.healthFalimyWrapper}>
        <div className={styles.healthFamilyContent}>
            <div className={styles.followingLeft}>
                <p className={styles.familyTitle}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY</p>
                <h2>Our Families</h2>
                <p className={styles.msgToFamily}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>

            <div className={styles.followingRight}>
                <div className={styles.followingCardTop}>
                    <div className={styles.followerCard1}>
                        <FollowersCard text="Happy Patients" followers = "5000" icon={happyHand}/>
                    </div>
                    <div className={styles.followerCard2}>
                        <FollowersCard text="Happy Patients" followers = "5000" icon={happyHand}/>
                    </div>
                </div>

                <div className={styles.followingCardBottom}>
                <div className={styles.followerCard3}>
                    <FollowersCard text="Happy Patients" followers = "5000" icon={happyHand}/>
                </div>
                <div className={styles.followerCard4}>
                    <FollowersCard text="Happy Patients" followers = "5000" icon={happyHand}/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthFamily