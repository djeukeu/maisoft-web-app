import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ClientDashboard from './pages/ClientDashboard';
import ClientLayout from './layout/ClientLayout';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/client' element={<ClientLayout />}>
					<Route index element={<ClientDashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
