import React from "react";
import "../styles/testimonial.css"
import { AnimatePresence, motion } from "framer-motion";
const testimonialVariant = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            type: "tween"
        }
    },
    exit: {
        opacity: 0,
        x: "-100vw",
        transition: {
            duration: 0.5,
            type: "tween"
        }
    }

}
const TestimonialCard = ({ image, name, testimonial }) => {
    return (
        <motion.div className="testimonial-card"
            variants={testimonialVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <p>{testimonial}</p>
            <div className="client-info">
                <img src={image} alt="pic" />
                <div className="client-name">
                    <h4>{name}</h4>
                    <span>client</span>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
