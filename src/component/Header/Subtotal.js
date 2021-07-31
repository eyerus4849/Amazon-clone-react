import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Subtotal() {
  const [{ basket,user }, dispatch] = useStateValue();

  const history = useHistory();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
    return (
        <div className="subtotal">
             <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Link to={!user && '/login'}>
      <button onClick={(e) => history.push('/payment')} >
        Proceed to Checkout
      </button>
      </Link>
     
        </div>
    )
}

export default Subtotal
