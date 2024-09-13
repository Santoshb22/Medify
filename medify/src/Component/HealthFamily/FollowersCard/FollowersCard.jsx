import styles from "./FollowersCard.module.css"
const FollowersCard = ({icon, text, followers}) => {
  return (
    <div className={styles.followersCard}>
        <img src={icon} alt="icon" />
        <div className={styles.followerCardContent}>
            <h3 className={styles.followerCardHeading}>{followers}+</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default FollowersCard