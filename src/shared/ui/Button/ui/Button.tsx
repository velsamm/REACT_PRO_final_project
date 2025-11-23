import React, { memo, type FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

export const ButtonComponent: FC<ButtonProps> = (props) => (
	<MuiButton {...props}></MuiButton>
);

export const Button = memo(ButtonComponent);