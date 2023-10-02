import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "../styles/cardskeleton.css"
const CardSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <div className="card-skeleton" key={i}>
            <div className="top">
                <Skeleton width={"100%"} height={"100%"} />
            </div>
            <div className="bottom">
                <Skeleton count={5} style={{ marginBottom: ".6em" }} />
            </div>
        </div>
    ));
};

export default CardSkeleton;
