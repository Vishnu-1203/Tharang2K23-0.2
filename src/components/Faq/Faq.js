import { useState } from "react"
import classes from "./Faq.module.css"

const questions = [
    {
        question: "How can i participate in Tharang 23?",
        answer: "Participation in Tharang 2023 is open to everyone and there are no registration fees to be applied."
    },
    {
        question: "What are the dates of THARANG 23?",
        answer: "March 31 and April 01. Events will happen from 9:00 am to 10:00 pm"
    },
    {
        question: "What is the entry fees for THARANG 23?",
        answer: "Its totally free of cost but for specefic events it's not"
    },
    {
        question: "Is it possible for one participant to attend any workshop?",
        answer: "No, participants can only attend registered workshops due to the scheduling of time."
    },    
]

const Faq = () => {

    const [clicked, setClicked] = useState(null)

    const toggle = (i) => {
        if(clicked === i) {
            return setClicked(null)
        }

        setClicked(i)
    }

  return (
    <section className={classes.faqSection}>
    <div className={classes.heading}>
        FAQ
    </div>
        <div className={classes.faq}>

        {questions.map((ques, i) => {
           return <div className={classes.single} onClick={() => toggle(i)}>
                <div className={classes.question}>{ques.question}</div>
                <div className={`${clicked === i ? classes.answer : classes.noAnswer}`}>{ques.answer}</div>
                <span className={classes.btn}>+</span>
            </div>
        })}

            {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
        </div>
    </section>
  )
}

export default Faq