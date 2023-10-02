import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"
import "../styles/Alert.css"
const alertVariant = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            duration: .4
        }
    },
    exit: {
        opacity: 0,
        x: "100vw",
        transition: {
            type: "spring",
            stiffness: 50,
            duration: .4
        }
    }
}
const Alert = ({ message, setErrorFound }) => {
    return (
        <motion.div className="alert"
            variants={alertVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <span>{message}</span>
            <button onClick={() => setErrorFound(false)}>
                <CloseIcon className="icon" />
            </button>
        </motion.div>
    );
};

export default Alert;
