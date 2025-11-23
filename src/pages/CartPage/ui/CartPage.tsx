import s from './CartPage.module.css';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@shared/store/utils';
import { cartActions, cartSelectors } from '@shared/store/slices/cart';
import { CartList } from './CartList';
import { CartAmount } from './CartAmount';
import { CartModal } from './CartModal';

export const CartPage = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет корзине</h1>;
	}

	const afterSubmit = (totalCost: number, productsAmount: number) => {
		dispatch(cartActions.setSuccessOrderModal({ totalCost, productsAmount }));
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList products={products} />
				<CartAmount products={products} afterSubmit={afterSubmit} />
			</div>
			<CartModal />
		</div>
	);
};
