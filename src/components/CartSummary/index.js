// Write your code here
import {useState} from 'react'
import Popup from 'reactjs-popup'
import './index.css'
import CartContext from '../../context/CartContext'
// import PaymentPopup from '../PaymentPopup'

const options = [
  {label: 'Card', value: 'card'},

  {label: 'Net Banking', value: 'netBanking'},

  {label: 'UPI', value: 'upi'},

  {label: 'Wallet', value: 'wallet'},

  {label: 'Cash on Delivery', value: 'cashOnDelivery'},
]

const CardSummary = () => {
  const [showSuccessMsg, setSuccessMsg] = useState(false)
  const [optionValue, setValue] = useState('e-pay')

  const onOptionChange = e => {
    setValue(e.target.value)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}
                /-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <Popup
                trigger={
                  <button type="button" className="checkout-button d-sm-none">
                    Checkout
                  </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button type="button" className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Payment </div>
                    <div className="content">
                      <div className="total-items-price-pay">
                        <h4>
                          {cartList.length} items in Cart - Rs.{total}
                        </h4>
                        {showSuccessMsg && (
                          <h1 className="success-msg">
                            Your order has been placed successfully
                          </h1>
                        )}
                      </div>
                      <div>
                        <div className="select-pay-option-container">
                          <h3>Select Payment Option</h3>

                          <select value={optionValue} onChange={onOptionChange}>
                            {options.map(option => (
                              <option value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        type="button"
                        className="button"
                        onClick={() => {
                          console.log('order placed')
                          setSuccessMsg(true)
                        }}
                        disabled={optionValue !== 'cashOnDelivery'}
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CardSummary
