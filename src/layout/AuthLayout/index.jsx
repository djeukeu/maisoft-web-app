import * as React from 'react';
import Grid from '@mui/material/Grid';

const AuthLayout = () => {
	return (
		<Grid
			item
			xs={false}
			sm={4}
			md={6}
			sx={{
				backgroundImage: 'url(https://source.unsplash.com/random)',
				backgroundRepeat: 'no-repeat',
				backgroundColor: (t) =>
					t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		/>
	);
};

export default AuthLayout;
