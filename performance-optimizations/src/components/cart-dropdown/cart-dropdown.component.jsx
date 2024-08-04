import {
    // useCallback,
    useMemo,
    useState,
} from 'react';

import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
    CartDropdownContainer,
    // EmptyMessage,
    CartItems,
} from './cart-dropdown.styles';

const sleep = (milliseconds) => {
    const start = new Date().getTime();

    for (let i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) break;
    }
};

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    // const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const hundredCount = useMemo(() => {
        console.log('START');
        sleep(2000);
        console.log('END');

        return 100 + count;
    }, [count]);

    // const value = hundredCount();

    // const goToCheckoutHandler = useCallback(() => {
    //     navigate('/checkout');
    // }, [navigate]);

    return (
        <CartDropdownContainer>
            <CartItems>
                {hundredCount}

                {/* {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )} */}
            </CartItems>
            <Button onClick={() => setCount(count + 1)}>START</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
