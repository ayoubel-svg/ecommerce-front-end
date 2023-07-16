import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/productDetaille.css"
import { increment } from "../data/CounterSlice";
import { add_to_cart } from "../data/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductsDetaills = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => setProduct(res.data))
    }, [])
    function handleClick() {
        dispatch(increment())
        dispatch(add_to_cart({ ...product }))
    }
    const notify = () => toast.success('product with success', {
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
        <div className="productsDetaille">
            <div className="stage">
                <div className="image">
                    {product.length !== 0 && <img src={product?.images[0]} alt="image" />}
                </div>
                <div className="section2">
                    <h1>{product?.title}</h1>
                    <span>${product?.price}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos itaque, eius temporibus ab labore vero illum amet praesentium ea aliquid, distinctio reiciendis, delectus asperiores sint expedita perspiciatis fuga maiores sequi magnam ipsam. Quaerat omnis aut deleniti eos adipisci. Illo.</p>
                    <button className="add-cart" onClick={() => {
                        handleClick()
                        notify()
                    }}>Add to cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductsDetaills;
