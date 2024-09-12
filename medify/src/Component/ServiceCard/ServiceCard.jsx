import styles from "./ServiceCard.module.css"

const ServiceCard = ({logo, text, className}) => {
  console.log(className)
  return (
<div className={className ? `${styles.card} ${styles[className]}` : styles.card}>
<img src={logo} alt={text} />
        <p>{text}</p>
    </div>
  )
}

export default ServiceCard