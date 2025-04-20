import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { closeModal } from "../features/modal/modalSlice"

const Modal = () => {
    const dispatch = useDispatch();


    return (
        <aside class="modal-container">
            <div class="modal">
                <h4>Remove all items from shopping cart?</h4>
                <div class="btn-container">
                    <button onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }} type="button" class="btn confirm-btn">
                        confirm
                    </button>
                    <button onClick={()=> dispatch(closeModal()) } type="button" class="btn clear-btn">
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal