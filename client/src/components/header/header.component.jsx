import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'
// import {auth} from '../../firebase/firebase.utils'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signOutStart} from '../../redux/user/user.actions'


const Header=({currentUser,hidden,signOutStart})=> (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            
            {
                currentUser?
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden?null:
            <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
// here state is rootReducer



const mapDispatchToProps=dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
