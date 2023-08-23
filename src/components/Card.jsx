import React from "react";
import "../styles/card.css"
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Star from "./Star";
import { FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
const Card = (props) => {
    const { image, price, name, description } = props
    return (
        <div className="card">
            <div className="my-img">
                {image && <img src={`http://localhost:8000/${image}`} alt="pic" />}
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <Star />
                <p>{description.slice(0, 50)}</p>
                <div className="card-footer">
                    <span style={{ fontWeight: "bolder" }}>$ {price}</span>
                    <Link className="add_to">Add to cart</Link>
                    <FaRegHeart size={25} cursor="pointer" />
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Card;
