import React from 'react'
import CartIcon from './CartIcon'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const amount =  useSelector( (store) => store.cart.amount );

    return (
        <nav>
            <div class="nav-center">
                <h3>Redux tookkit</h3>
                <div class="nav-container">
                    <CartIcon />
                    <div class="amount-container">
                        <p class="total-amount">
                            {amount}
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar