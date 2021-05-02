import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {clearWholeCart} from '../../redux/cart/cart.actions'

const StripeCheckoutButton=({price,clearWholeCart})=>{
    const priceForStripe = price*100;
    const publishableKey='pk_test_51ImlWESJIxOGWWBfVJYJdZkP2p6g7qENGOQDo4eKJ1DHPl80wnAN02N6bkXAGL3AVdVlZSI9F9IhEDKYMGzO6nED003KOcg2Pm'

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
        clearWholeCart();
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    clearWholeCart: () => dispatch(clearWholeCart())
  });
export default connect(null,mapDispatchToProps)(StripeCheckoutButton)