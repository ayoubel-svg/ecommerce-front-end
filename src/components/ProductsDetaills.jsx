import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/productDetaille.css"
import { increment } from "../data/CounterSlice";
import { add_to_cart } from "../data/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductSkeleton from "./ProductSkeleton";
const ProductsDetaills = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const token = sessionStorage.getItem("token")
    const [currentImage, setCurrentImage] = useState(0)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/product/${id}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setProduct(res.data.data)

            } catch (err) {
                console.log(err)
            }
        }
        getProduct()
    }, [id, product])

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
    const updateCurrentImage = (id) => {
        setCurrentImage(id)
    }
    // if (product === null) return <div className="product-detaille-loader">
    //     <CircularProgress color="secondary" />
    // </div>
    return (
        <div className="productsDetaille">
            {product === null && <ProductSkeleton />}
            <div className="stage">
                <div className="images">
                    <div className="image">
                        {product !== null && <img src={`http://localhost:8000/images/${product.images[currentImage]}`} alt="pic" />}
                    </div>
                    <div className="image-gallery">
                        {product !== null && product.images.map((img, i) => (
                            <img key={i} src={`http://localhost:8000/images/${img}`} alt="pic" onClick={() => updateCurrentImage(i)} />
                        ))}
                    </div>
                </div>
                {product !== null &&
                    <div className="section2">

                        <h1>{product?.name}</h1>
                        <span>${product?.price}</span>
                        <p>{product?.description}</p>
                        <span>In Stock {product?.quantity}</span>

                        <div>
                            <button className="add-cart" onClick={() => {
                                handleClick()
                                notify()
                            }}>Add to cart</button>
                        </div>
                    </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductsDetaills;
