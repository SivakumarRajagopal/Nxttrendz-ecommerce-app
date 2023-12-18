import {useState} from 'react'
import './index.css'

const options = [
  {label: 'Card', value: 'card'},

  {label: 'Net Banking', value: 'netBanking'},

  {label: 'UPI', value: 'upi'},

  {label: 'Wallet', value: 'wallet'},

  {label: 'Cash on Delivery', value: 'cashOnDelivery'},
]

const PaymentPopup = () => {
  const [value, setValue] = useState('e-pay')

  const onOptionChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className="select-pay-option-container">
        <h3>Select Payment Option</h3>
        {/* <div className="radio-container">
          <input
            type="radio"
            name="payOption"
            value="e-pay"
            id="ePay"
            checked={payOption === 'e-pay'}
            onChange={onOptionChange}
          />
          <label htmlFor="ePay">E-payment</label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            name="payOption"
            value="CashOnDelivery"
            id="cashOn"
            checked={payOption === 'CashOnDelivery'}
            onChange={onOptionChange}
          />
          <label htmlFor="cashOn">CashOnDelivery</label>
        </div> */}
        <select value={value} onChange={onOptionChange}>
          {options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default PaymentPopup
