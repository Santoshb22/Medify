import AccordianQNA from "../AccordianQNA/AccordianQNA"
import styles from "./AskedQuestion.module.css"
import askingImg from "../../assets/qnaImg.png"
import heartInHand from "../../assets/heartInHand-icon.png"
import smileIcon from "../../assets/smile-icon.png"
const AskedQuestion = () => {

    const accordianQNA = [
        {
            question: "Why choose our medical for your family?",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "Why we are different from others?",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "Trusted and experience senior care and love",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "How to get appointment for emergency cases?",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

  return (
    <div className={styles.askedQuestionWrapper}>
        <div className={styles.askedQuestionContainer}>
            <div className={styles.askedQHeader}>
                <p>Get Your Answer</p>
                <h2>Frequently Asked Questions</h2>
            </div>

            <div className={styles.askedQContent}>
                
                <div className={styles.askedQLeft}>
                    <img className={styles.menQuestioningImg} src={askingImg} alt="image" />

                    <img className={styles.heartInHandIcon} src={heartInHand} alt="icon" />

                    <div className={styles.happyPatients}>
                        <img src={smileIcon} alt="smile icon" />
                        <div className={styles.questionAsked}>
                            <p>84K+</p>
                            <p className={styles.questionAskedText}>Happy Patients</p>
                        </div>
                    </div>
                </div>

                <div className={styles.askedQAccordian}>
                    {
                        accordianQNA.map((data, idx) => <AccordianQNA key={idx} question = {data.question} answer = {data.ans}/>
                    )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AskedQuestion