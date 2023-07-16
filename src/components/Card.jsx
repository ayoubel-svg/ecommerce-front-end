import React from "react";
import "../styles/card.css"
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../data/CounterSlice";
import { Link, useNavigate } from "react-router-dom";
import { add_to_cart } from "../data/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = (props) => {
    const { id, title, description, price, images } = props
    const dispatch = useDispatch()
    function handleClick() {
        dispatch(increment())
        dispatch(add_to_cart({ ...props }))
    }
    const notify = () => toast.success('item added with success', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return (
        <div className="card">
            <div className="my-img">
                <Link to={`/productdetaille/${id}`}><img src={images[0]} alt={images} /></Link>
            </div>
            <div style={{ width: "100%", marginTop: "4em", display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column", gap: "10px", padding: "0px 10px" }}>
                <Link to={`/productdetaille/${id}`}><h3>{title}</h3></Link>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px", width: "100%" }}>
                    <span>${price}</span>
                    <span className="back-add" onClick={() => {
                        handleClick()
                        notify()
                    }
                    }>
                        <AddIcon className="addIcon" />
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Card;
