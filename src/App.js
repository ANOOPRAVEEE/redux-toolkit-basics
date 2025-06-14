import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";


function App() {

  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  },
    [cartItems]
  );

  useEffect(() => {
    dispatch(getCartItems())
  }, []);

  if( isLoading ) {

    return(
      <div class="loading">
        <h1>Loading..</h1>
      </div>
    )

  }

  return <>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </>
}
export default App;
