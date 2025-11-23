import { useNavigate } from 'react-router-dom';
// import { ReactComponent as BackSvg } from '@shared/assets/icons/back.svg';
import BackSvg from '@shared/assets/icons/back.svg?react';
import { Button } from '@shared/ui/Button';

export const ButtonBack = () => {
	const navigate = useNavigate();
	
	return (
		<Button onClick={() => navigate(-1)}>
			<BackSvg />
		</Button>
	);
};
