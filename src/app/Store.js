import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../data/cartSlice";
import Counter2 from "../data/Counter2";
import CounterSlice from "../data/CounterSlice";
import FetchSlice from "../data/fecthSlice";
import FetchSneakers from "../data/fetchSneakers"
import LoginSysteme from "../data/LoginSysteme";

const Store = configureStore({
    reducer: {
        fetch: FetchSlice,
        sneakers: FetchSneakers,
        counte: CounterSlice,
        cart: cartSlice,
        login: LoginSysteme,
        counter2: Counter2
    }
})

export default Store