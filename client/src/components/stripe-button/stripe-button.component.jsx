import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {clearCart} from '../../redux/cart/cart.actions'
import axios from 'axios'

const StripeCheckoutButton=({price,clearCart})=>{
    const priceForStripe = price*100;
    const publishableKey='pk_test_51ImlWESJIxOGWWBfVJYJdZkP2p6g7qENGOQDo4eKJ1DHPl80wnAN02N6bkXAGL3AVdVlZSI9F9IhEDKYMGzO6nED003KOcg2Pm'

    const onToken=token=>{
        axios({
            url:'payment',
            method: 'post',
            data: {
                amount:priceForStripe,
                token
            }
        })
        .then(response=>{
            alert('Payment Successful');
            clearCart();
        })
        .catch(error=>{
            console.log('Payment error: ',JSON.parse(error));
            alert('There was an issue with your payment. Please make sure that you use the provided credit cart.')
        })

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
    clearCart: () => dispatch(clearCart())
  });
export default connect(null,mapDispatchToProps)(StripeCheckoutButton)