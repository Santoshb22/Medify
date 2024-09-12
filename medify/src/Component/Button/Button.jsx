import styles from "./Button.module.css";

const Button = ({buttonText, color}) => {
  return (
    <div className={`${styles.button} ${styles[color]}`}>{buttonText}</div>   )
}

export default Button