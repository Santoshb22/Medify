import styles from "./Button.module.css";

const Button = ({buttonText, color}) => {
  return (
    <button className={`${styles.button} ${styles[color]}`}>{buttonText}</button>   )
}

export default Button