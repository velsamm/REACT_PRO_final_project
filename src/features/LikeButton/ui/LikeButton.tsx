import classNames from 'classnames';
// import { ReactComponent as LikeSvg } from '@shared/assets/icons/like.svg';
import LikeSvg from '@shared/assets/icons/like.svg?react';
import { Button } from '@shared/ui/Button';
import { useLikeButton } from '../model/useLikeButton';
import s from './LikeButton.module.css';
import { memo } from 'react';
import { useClickCounter } from '@shared/hooks/useClickCounter';

type TLikeButtonProps = {
	product: Product;
};
const LikeButtonComponent = ({ product }: TLikeButtonProps) => {
	const { isLike, toggleLike } = useLikeButton(product);
	const addClickCounter = useClickCounter();

	const handleClick = () => {
		addClickCounter();
		toggleLike();
	};

	return (
		<Button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLike,
			})}
			onClick={handleClick}>
			{/* <img src={likeSvgSrc} /> */}
			<LikeSvg />
		</Button>
	);
};

export const LikeButton = memo(LikeButtonComponent);
