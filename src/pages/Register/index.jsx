import * as React from 'react';
import { Avatar, Button, Paper, Box, Grid, Typography } from '@mui/material';
import AuthLayout from '../../layout/AuthLayout';
import CustomTextField from '../../components/CustomTextField';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<Grid container component='main' sx={{ height: '100vh' }}>
			<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Avatar
						sx={{ width: 128, height: 128, p: 3 }}
						src={require('../../assets/images/logo.png')}
					/>
					<Box
						component='form'
						noValidate
						// onSubmit={handleSubmit}
					>
						<CustomTextField
							required
							id='firstname'
							label='First Name'
							name='firstname'
						/>
						<CustomTextField
							required
							id='lastname'
							label='Last Name'
							name='lastname'
						/>
						<CustomTextField
							required
							id='email'
							label='Email Address'
							name='email'
							type='email'
						/>
						<CustomTextField
							required
							id='password'
							name='password'
							label='Password'
							type='password'
						/>
						<CustomTextField
							required
							id='confirm_password'
							name='confirm_password'
							label='Confirm Password'
							type='password'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Register
						</Button>
					</Box>
				</Box>
				<Typography
					sx={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: 2,
					}}>
					Already have an account?
					<Typography color='primary' component={Link} to='/login'>
						Login
					</Typography>
				</Typography>
			</Grid>
			<AuthLayout />
		</Grid>
	);
};

export default Register;
