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
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Card = (props) => {
    const { images, price, name, id, description } = props

    return (
        <div className="card">
            <div className="my-img">
                <Link to={`/productdetaille/${id}`}>
                    {<img src={`http://localhost:8000/images/${images[0]}`} alt="pic" />}
                </Link>
            </div>
            <div className="card-body">
                <Link to={`/productdetaille/${id}`}>
                    <h3>{name}</h3>
                </Link>
                {/* <Star /> */}
                <p>{description.slice(0, 50)}</p>
                <div className="card-footer">
                    <span style={{ fontWeight: "bolder" }}>$ {price}</span>
                    <Link className="add_to">Add to cart</Link>
                </div>
            </div>
            <FaRegHeart className="card-heart" size={25} cursor="pointer" />

            <ToastContainer />
        </div>
    );
};

export default Card;
