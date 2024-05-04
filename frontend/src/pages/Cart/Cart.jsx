import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { FaTrashAlt } from 'react-icons/fa'

function Cart() {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext)
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={item.image} alt="item" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>
                {getTotalCartAmount() === 0 ? 'Empty' : getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {getTotalCartAmount() === 0 ? '' : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div className="">
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                name="promocode-input"
                placeholder="Promo Code"
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
