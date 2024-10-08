import styles from "./ServiceCard.module.css"

const ServiceCard = ({logo, text, className}) => {
  return (
<div className={className ? `${styles.card} ${styles[className]}` : styles.card}>
<img src={logo} alt={text} />
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ServiceCard