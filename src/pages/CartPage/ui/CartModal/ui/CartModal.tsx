import { cartActions, cartSelectors } from '@shared/store/slices/cart';
import { useAppDispatch, useAppSelector } from '@shared/store/utils';
import { Button } from '@shared/ui/Button';
import { Modal } from '@shared/ui/Modal/ui/Modal';
import { FC } from 'react';
import { createPortal } from 'react-dom';

export const CartModal: FC = () => {
    const dispatch = useAppDispatch();
	const successOrder = useAppSelector(cartSelectors.getSuccessOrder);
	
    const handleClose = () => {
        dispatch(cartActions.setSuccessOrderModal(null));
    }
    
	return (
		<Modal open={!!successOrder} onClose={handleClose}>
            <div>
                <p>Вы заказали {successOrder?.productsAmount} товаров на общую сумму {successOrder?.totalCost} ₽</p>
                <div>
                    <Button variant='outlined' onClick={handleClose}>Хорошо</Button>
                </div>
            </div>
		</Modal>
	);
};
