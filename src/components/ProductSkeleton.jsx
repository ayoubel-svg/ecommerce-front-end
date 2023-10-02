import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "../styles/productskeleton.css"
const ProductSkeleton = () => {
    return <div className="product-skeleton">
        <div className="img-section-skeleton">
            <div className="main-img-skeleton">
                <Skeleton width={"100%"} height={"100%"} />
            </div>
            <div className="subimg-skeleton">
                {Array(5).fill(0).map((_, i) => (
                    <div className="subimg-div" key={i}>
                        <Skeleton width={"100%"} height={"100%"} />
                    </div>
                ))}
            </div>
        </div>
        <div className="main-info-skeleton">
            <h1><Skeleton /></h1>
            <span><Skeleton /></span>
            <p><Skeleton count={4} /></p>
            <span><Skeleton /></span>
            <button><Skeleton /></button>
        </div>
    </div>;
};

export default ProductSkeleton;
