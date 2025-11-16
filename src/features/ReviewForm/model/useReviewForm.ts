import { useActionState, useCallback, useEffect, useTransition } from 'react';
import AppApi from '@shared/api/ApiServise';
import { productsApi } from '@shared/store/api/productsApi';
import { useAppDispatch } from '@shared/store/utils';
import { ReviewFormState } from './types';

const action = async (prevState: ReviewFormState, queryData: FormData) => {
	const textInput = queryData.get('text')?.toString();
	const ratingInput = queryData.get('rating')?.toString();

	if (textInput && ratingInput) {
		// предположим, что пользователь честный нехакер и не будем заниматься санитайзингом и проверкой на NaN
		const rating = Number(ratingInput);
		const { productId } = prevState;

        await AppApi.addProductReview(productId, { text: textInput, rating });
		
		return {
			...prevState,
			status: 'success',
		} satisfies ReviewFormState;
	}

	return prevState;
};

export const useReviewForm = (product: Product) => {
	const initialState: ReviewFormState = {
		rating: 0,
		text: '',
		status: 'idle',
		productId: product.id,
	};

	const dispatch = useAppDispatch();
	const [_, startTransition] = useTransition();
	const [state, formAction, isPending] = useActionState(
		async (state: ReviewFormState, queryData: FormData | null) => {
			if (queryData == null) {
				return initialState;
			}

			return await action(state, queryData);
		},
		initialState
	);

    const reset = useCallback(() => {
        formAction(null);
    }, [])

	useEffect(() => {
		if (state.status === 'success' && !isPending) {
			dispatch(
				productsApi.util.invalidateTags([{ type: 'Products', id: product.id }])
			);
			startTransition(() => {
				reset();
			});
		}
	}, [state.status, isPending, reset]);

	return {
		formAction,
		isPending,
	};
};
