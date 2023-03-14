import * as React from 'react';
import {
	Avatar,
	Button,
	Link as MaterialLink,
	Paper,
	Box,
	Grid,
	Typography,
} from '@mui/material';
import AuthLayout from '../../layout/AuthLayout';
import CustomTextField from '../../components/CustomTextField';
import { Link } from 'react-router-dom';

const Login = () => {
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
						sx={{ mt: 1 }}>
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
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Login
						</Button>
						<Grid container>
							<Grid item sx={{ marginLeft: 'auto' }}>
								<MaterialLink href='#' variant='body2' color='primary'>
									Forgot password?
								</MaterialLink>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Typography
					sx={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: 'auto',
					}}>
					Don't have an account?
					<Typography color='primary' component={Link} to='/register'>
						Register
					</Typography>
				</Typography>
			</Grid>
			<AuthLayout />
		</Grid>
	);
};

export default Login;
