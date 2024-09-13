import styles from "./InputNumber.module.css"

const InputNumber = () => {
  return (
    <div className={styles.inputNumberContainer}>
        <input className={styles.countryCode} type="number" name="country-code" id="country-code" placeholder="91+"/>
        <input className={styles.mobileNumber} type="number" placeholder="Enter your number" />
    </div>
  )
}

export default InputNumber