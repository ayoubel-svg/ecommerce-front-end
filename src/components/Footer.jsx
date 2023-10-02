import React from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/footer.css"
import { useLocation } from "react-router-dom";
const Footer = () => {
    const { pathname } = useLocation()
    return (
        <div className="footer" style={{ display: pathname === "/login" || pathname === "/register" || pathname === "/forget-password" || pathname === "/reset-password" ? "none" : "" }}>
            <div className="footer-section1">
                <div className="principal">
                    <div className="principe">
                        <LocalShippingIcon />
                        <span>Free shipping & return</span>
                    </div>
                    <div className="principe">
                        <CurrencyExchangeIcon />
                        <span>100% Money back</span>
                    </div>
                    <div className="principe">
                        <PublishedWithChangesIcon />
                        <span>replacement in case of defact</span>
                    </div>
                    <div className="principe">
                        <ShoppingCartCheckoutIcon />
                        <span>Safe and Secure Checkout</span>
                    </div>
                </div>
                <span style={{ width: "100%", height: "0.1px", background: "gray" }}></span>
                <div className="mySocial">
                    <h3>AStore</h3>
                    <div className="social-media">
                        Our Social Media
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "15px", placeContent: "center center", gap: "1em" }}>
                            <a style={{ color: "#fff" }} href="#"><FacebookIcon /></a>
                            <a style={{ color: "#fff" }} href="#"><InstagramIcon /></a>
                            <a style={{ color: "#fff" }} href="#"><TwitterIcon /></a>
                        </div>
                    </div>
                    <div>
                        <h4>Get In touch</h4>
                        <a href="mailto:ayoubtj2@gmail.com" style={{
                            color: "#fff"
                        }}>ayoubtj2@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-section2">
                <p style={{ padding: "10px" }}>Copyright &#169; 2023 AStore, All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;
