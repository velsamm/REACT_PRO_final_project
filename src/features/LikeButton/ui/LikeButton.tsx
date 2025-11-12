import classNames from 'classnames';
import { ReactComponent as LikeSvg } from '@shared/assets/icons/like.svg';
import { Button } from '@shared/ui/Button';
import { useLikeButton } from '../model/useLikeButton';
import s from './LikeButton.module.css';
import { memo } from 'react';

type TLikeButtonProps = {
	product: Product;
};
const LikeButtonComponent = ({ product }: TLikeButtonProps) => {
	const { isLike, toggleLike } = useLikeButton(product);

	return (
		<Button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</Button>
	);
};

export const LikeButton = memo(LikeButtonComponent);