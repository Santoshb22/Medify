import styles from "./ServiceCard.module.css"

const ServiceCard = ({logo, text}) => {
  return (
    <div className={styles.serviceCard}>
        <img src={logo} alt={text} />
        <p>{text}</p>
    </div>
  )
}

export default ServiceCard