import React,{useEffect} from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Home/firebase'
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div className="header">
            <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
            <div className="header_search">
<input className="header_searchInput" type="text">
</input>
<SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
            <Link to={!user && '/login'} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to={user? '/orders' :'/login'} className="header__clearlink">
            <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">& Prime</span>
          </div>
          <Link to="/checkout" className="header__clearlink">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header_basketCount">
            {basket.length}
            </span>
          </div>
          </Link>
            </div>
        </div>
    )
}

export default Header
