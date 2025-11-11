import React, { type FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

export const Button: FC<ButtonProps> = (props) => (
	<MuiButton {...props}></MuiButton>
);
