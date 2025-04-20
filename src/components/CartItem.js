import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeItem, increase, decrease } from "../features/cart/cartSlice";


const CartItem = ({ id, img, title, price, amount }) => {

  const dispatch = useDispatch();

  return (
    <article class="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch(increase({ id }))}>
          <FaChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => {

          if (amount === 1) {
            dispatch(removeItem(id));
            return;
          }

          dispatch(decrease({ id }));

        }}>
          <FaChevronDown />
        </button>
      </div>

    </article>
  )
}

export default CartItem