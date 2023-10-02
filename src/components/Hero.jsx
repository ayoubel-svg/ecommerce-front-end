import React, { useEffect, useMemo, useState } from "react";
import hero from "../assets/hero.png"
import { Link } from "react-router-dom";
import "../styles/hero.css"
import axios from "axios";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardSkeleton from "./CardSkeleton";
import Lottie from "lottie-react";
import animationData from "../assets/animation_lmn5vvng.json"
import shopping from "../assets/shopping.json"
import arrow from "../assets/arrow.json"
import hand_shopping from "../assets/hand_shopping.json"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { clientTestimonial } from "../data/testimonial";
import TestimonialCard from "./TestimonialCard";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
const Hero = () => {
    const [products, setProducts] = useState([])
    const token = sessionStorage.getItem("token")
    const [count, setCount] = useState(0)
    const memoizeProduct = useMemo(() => products, [products.length])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/product", {
                    headers: {
                        Accept: "application/json",
                    }
                })
                setProducts(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [memoizeProduct])
    return (
        <div>
            <div style={{ width: "100%", minHeight: "100vh" }} className="hero-container">
                <Lottie animationData={shopping} className="lottie-shopping-animation" />
                <Lottie animationData={arrow}
                    className="lottie-arrow-animation"
                />
                <div className="hero-typography">
                    <h1>Discover endless <span style={{ color: "#4aca4a" }}>delights</span> at our store .</h1>
                    <p style={{ width: "75%" }}>
                        Welcome to our online store! Enjoy hassle-free shopping with a wide range of quality products, secure payments, and fast delivery. Customer satisfaction is our priority. Start shopping now !
                    </p>
                    <Link>
                        <motion.button
                            className="btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Start Shopping</motion.button>
                    </Link>
                </div>
                <div className="hero-image">
                    <Lottie animationData={animationData} className="shopping" style={{ width: "100%" }} />
                </div>
            </div>
            <div className="our-best-seller">
                <div className="product-header">
                    <h1>Best Sellers</h1>
                </div>
                <div style={{ width: "100%" }}>
                    <div className="skeleton-container">
                        {products.length === 0 && <CardSkeleton cards={4} />}
                    </div>
                    <div className="image-container">
                        {products.slice(0, 4).map((product, i) => (
                            <Card
                                key={i}
                                id={product.id}
                                name={product.name}
                                images={product.images}
                                price={product.price}
                                description={product.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="our-services">
                <h1>Our Service</h1>
                <div className="services">
                    <div className="shipping">
                        <LocalShippingIcon className="shipping-icon" />
                        <h1>Free Shipping</h1>
                        <p>Shop worry-free with free shipping on all orders! Enjoy a hassle-free shopping experience as we cover the shipping costs for every purchase. </p>
                    </div>
                    <div className="payment">
                        <CreditCardIcon className="payment-icon" />
                        <h1>Secure Payment</h1>
                        <p>Shop securely and worry-free! Your payment security is our top priority. With industry-standard encryption, we ensure the safeguarding of your financial information.</p>
                    </div>
                    <div className="help">
                        <VolunteerActivismIcon className="help-icon" />
                        <h1>Love to Help</h1>
                        <p>At our core, customer satisfaction is our priority. We take great joy in assisting you with any questions or concerns you may have.</p>
                    </div>
                </div>
            </div>
            <div className="our-customers">
                <h1>Our Customers Love us</h1>
                <div className="customers">
                    <div className="sub-customers">
                        <FormatQuoteIcon className="left-quote-icon" />
                        <div className="testimonials">
                            <AnimatePresence key={count}>
                                <TestimonialCard
                                    name={clientTestimonial[count].name}
                                    testimonial={clientTestimonial[count].testimonial}
                                    image={clientTestimonial[count].image}
                                />
                            </AnimatePresence>
                        </div>
                        <FormatQuoteIcon className="right-quote-icon" />
                    </div>
                    <div className="slide-btn">
                        <span onClick={() => setCount(0)}>
                            <PanoramaFishEyeIcon className="slide-icon" />
                        </span>
                        <span onClick={() => setCount(1)}>
                            <PanoramaFishEyeIcon className="slide-icon" />
                        </span>
                        <span onClick={() => setCount(2)}>
                            <PanoramaFishEyeIcon className="slide-icon" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="call-to-action">
                <div className="call-to-action-head">
                    <div className="call-to-action-title">
                        <h1>Ready To Get Shopping </h1>
                        <span>Happy Shopping</span>
                    </div>
                    <Link to={"/store"}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Get Shopping</motion.button>
                    </Link>
                </div>
                <div className="call-to-action-body">
                    <Lottie animationData={hand_shopping} className="call-to-action-image" />
                </div>
            </div>
            <div className="faq">
                <div className="faq-head">
                    <h1>FAQ</h1>
                    <span>All Questions</span>
                </div>
                <div className="faq-body">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ padding: "1em", ":focus": { background: "#9cf69c" } }}
                            className="accordion-title"
                        >
                            <h3>How can I contact customer support?</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                You can reach our customer support team by phone at  <strong>0645781291</strong> or by email at <strong> ayoub@gmail.com</strong> . We are available <strong>Morocco</strong> to assist you with any inquiries or concerns you may have.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ padding: "1em", ":focus": { background: "#9cf69c" } }}
                        >
                            <h3>What are your shipping options and delivery times</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                We offer standard shipping and express shipping options. Standard shipping typically takes one day to deliver, while express shipping takes approximately 5 hours. Please note that delivery times may vary depending on your location and any potential customs procedures.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ padding: "1em", ":focus": { background: "#9cf69c" } }}                        >
                            <h3>Do you offer international shipping ?</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Yes, we offer international shipping to most countries. During the checkout process, you can select your country for shipping options and rates.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ padding: "1em", ":focus": { background: "#9cf69c" } }}                        >
                            <h3>What is your return/exchange policy?</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                We have a 30-day return/exchange policy. If you are not satisfied with your purchase, you can return the item(s) within 15 days of receipt for a refund or exchange. Please refer to our Returns & Exchanges page on our website for detailed instructions and any specific conditions that may apply.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
};

export default Hero;
