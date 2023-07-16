import React from "react";
import "../styles/about.css"
import image from "../assets/aboutImage.jpg"
import client from "../assets/handshake.png"
import experience from "../assets/experience.png"
const About = () => {
    return (
        <div className="about">
            <h1 style={{ color: "gray", marginBottom: "1em" }}>About Us</h1>
            <div className="about-section1">
                <div className="about-image">
                    <img src={image} alt="image" />
                </div>
                <div className="story">
                    <h2>Our Story</h2>
                    <p>
                        AStore est un nouveau site de commerce électronique qui offre une plateforme pratique et fiable pour les achats en ligne. Le site propose une grande variété de produits dans les catégories de chaussures de sport, de meubles et de vêtements. AStore garantit que tous les produits sont de haute qualité et proviennent de marques réputées pour garantir la satisfaction des clients. Le site est convivial avec une interface facile à naviguer qui facilite la recherche et l'achat de produits. De plus, AStore propose plusieurs options de paiement et des processus de paiement sécurisés pour garantir aux clients une expérience de magasinage sans tracas. Avec ses prix compétitifs, son excellent service client et ses services de livraison fiables, AStore vise à devenir un guichet unique pour tous vos besoins d'achat. Que vous cherchiez une nouvelle paire de baskets, un nouveau meuble pour votre maison ou une tenue tendance pour votre garde-robe, AStore a tout ce dont vous avez besoin.
                    </p>
                </div>
            </div>
            <div className="experience">
                <div className="client-box">
                    <img src={client} alt="client" />
                    <p style={{ color: "gray" }}>150+ Happy Client</p>
                </div>
                <div className="experience-box">
                    <img src={experience} alt="client" />
                    <p style={{ color: "gray" }}>30+ Years Of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default About;
