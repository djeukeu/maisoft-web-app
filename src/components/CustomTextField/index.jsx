import * as React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = (props) => {
	const { id, label, required, name, type = 'text' } = props;

	return (
		<TextField
			{...props}
			margin='normal'
			required={required}
			fullWidth
			id={id}
			label={label}
			name={name}
			variant='standard'
			type={type}
		/>
	);
};

export default CustomTextField;
