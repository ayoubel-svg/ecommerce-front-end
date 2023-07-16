import React, { useEffect, useState } from "react";
import "../styles/myShop.css"
import { useSelector, useDispatch } from "react-redux";
import { delete_item } from "../data/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decrement } from "../data/CounterSlice";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { increment, decrement } from "../data/Counter2";
const ShopingCart = () => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const data = useSelector((state) => state.cart.cartItems)
    const count = useSelector((state) => state.counte.count)
    // const count2 = useSelector((state) => state.counter2.count)
    const dispatch = useDispatch()

    const notify = () => toast.success('Delete with success !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    // const wrong = () => toast.error('there is no items', {
    //     position: "top-center",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });
    useEffect(() => {

        setCartItems(data)
    }, [count])

    useEffect(() => {
        cartItems.map((ele) => {
            setTotal((prev) => prev + parseInt(ele.price))
        })
    }, [cartItems])

    return (
        <div className="my-shop">
            {cartItems.length === 0 ? <div>Empty Cart no element is beeing selected</div> : cartItems.map((ele, i) => {
                return (
                    <div className="item" key={i}>
                        <div className="main">
                            <div className="image">
                                <img src={ele.images[0]} alt="image" />
                            </div>
                            <div className="section2">
                                <div>
                                    <h3>{ele.title}</h3>
                                    <span>
                                        ${ele.price}
                                    </span>
                                    {/* <div>
                                        <span>Quantite</span>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                            <button style={{ background: "none", border: "none" }} onClick={() => {
                                                dispatch(decrement())
                                                setTotal((prev) => prev + ele.price)
                                            }}>
                                                <ArrowBackIosIcon />
                                            </button>
                                            <span>{count2}</span>
                                            <button style={{ background: "none", border: "none" }} onClick={() => {
                                                dispatch(increment())
                                                setTotal((prev) => prev + ele.price)
                                            }}>
                                                <ArrowForwardIosIcon />
                                            </button>
                                        </div>
                                    </div> */}
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eius cupiditate accusamus quo labore quaerat, iste odio quis dolorem asperiores deleniti perferendis eligendi. Placeat quisquam rerum modi. Eius, deleniti ut. Dolorem deleniti provident atque enim ducimus tempora dolores inventore accusantium.</p>
                                </div>
                                <button className="delete" onClick={() => {
                                    dispatch(delete_item(ele.id))
                                    dispatch(decrement())
                                    setTotal((prev) => prev - parseInt(ele.price))
                                    notify()
                                }}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <p className="total-price">Price Total <span> ${total}</span></p>
            <div>
                <Link to={cartItems.length !== 0 ? "/login" : ""} style={{
                    color: "white",
                    padding: "10px 30px",
                    background: "black",
                    cursor: "pointer",
                }}>Checkout</Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ShopingCart;
