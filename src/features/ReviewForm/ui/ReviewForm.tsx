import { useState, ChangeEvent } from 'react';
import classNames from 'classnames';
import { Rating } from '@shared/ui/Rating';
import s from './ReviewForm.module.css';
import { useReviewForm } from '../model/useReviewForm';

interface Props {
	product: Product;
}

export const ReviewForm = ({ product }: Props) => {
	const { formAction, isPending } = useReviewForm(product);
	const [rating, setRating] = useState(0);

	return (
		<form className={s['form']} action={formAction}>
			<Rating isEdit rating={rating} onChange={setRating} />
			<input type='hidden' name='rating' value={rating} />
			<textarea
				className={classNames(s['input'], s['textarea'])}
				name='text'
				id='text'
				placeholder='Напишите текст отзыва'></textarea>
			<button
				type='submit'
				className={classNames(s['form__btn'], s['pramary'], {
					[s['disabled']]: isPending,
				})}
				disabled={isPending}>
				{isPending ? 'Загрузка...' : 'Отправить отзыв'}
			</button>
		</form>
	);
};
